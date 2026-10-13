(() => {
  const status = document.getElementById('github-status');
  const container = document.getElementById('github-scroll');
  const meta = document.getElementById('github-meta');
  const summary = document.getElementById('github-summary');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  const dayLength = 86400000;
  const namespace = 'http://www.w3.org/2000/svg';
  const dateFormat = new Intl.DateTimeFormat('ru', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  const plurals = new Intl.PluralRules('ru');
  function countText(count) {
    const word = { one: 'коммит', few: 'коммита', many: 'коммитов', other: 'коммита' }[plurals.select(count)];
    return `${count.toLocaleString('ru')} ${word}`;
  }

  function element(name, attributes, text) {
    const node = document.createElementNS(namespace, name);
    for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function render(data) {
    if (!Array.isArray(data.contributions) || !data.contributions.length || data.contributions.length > 371) {
      throw new Error('Invalid contribution calendar');
    }
    const days = data.contributions.map(day => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(day.date) || !Number.isInteger(day.count) || day.count < 0 || !Number.isInteger(day.level) || day.level < 0 || day.level > 4) {
        throw new Error('Invalid contribution day');
      }
      const timestamp = Date.parse(`${day.date}T00:00:00Z`);
      if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== day.date) throw new Error('Invalid date');
      return { ...day, timestamp };
    }).sort((a, b) => a.timestamp - b.timestamp);
    for (let index = 1; index < days.length; index++) {
      if (days[index].timestamp - days[index - 1].timestamp !== dayLength) throw new Error('Incomplete calendar');
    }
    const start = days[0].timestamp;
    const offset = new Date(start).getUTCDay();
    const columns = Math.ceil((days.length + offset) / 7);
    const total = days.reduce((sum, day) => sum + day.count, 0);
    const totalText = `${countText(total)} за последний год`;
    const graph = element('svg', {
      class: 'github-graph', viewBox: `0 0 ${32 + columns * 18} 151`,
      role: 'img', 'aria-label': `${totalText}. С ${dateFormat.format(start)} по ${dateFormat.format(days.at(-1).timestamp)}.`
    });
    for (const [row, label] of [[1, 'Пн'], [3, 'Ср'], [5, 'Пт']]) {
      graph.append(element('text', { x: 0, y: 26 + row * 18 + 11 }, label));
    }
    let lastLabelColumn = -2;
    days.forEach((day, index) => {
      const date = new Date(day.timestamp);
      const position = index + offset;
      const column = Math.floor(position / 7);
      if ((index === 0 || date.getUTCDate() === 1) && column - lastLabelColumn >= 2) {
        graph.append(element('text', { x: 32 + column * 18, y: 14 }, months[date.getUTCMonth()]));
        lastLabelColumn = column;
      }
      const square = element('rect', {
        class: 'github-day', x: 32 + column * 18, y: 26 + (position % 7) * 18,
        width: 14, height: 14, rx: 2, 'data-level': day.level
      });
      square.append(element('title', {}, `${dateFormat.format(date)}: ${countText(day.count)}`));
      graph.append(square);
    });
    container.replaceChildren(graph);
    summary.textContent = totalText;
    status.hidden = true;
    container.hidden = false;
    meta.hidden = false;
    container.scrollLeft = container.scrollWidth;
  }

  status.textContent = 'Загрузка активности…';
  fetch('https://github-contributions-api.jogruber.de/v4/agabekov?y=last', { signal: controller.signal })
    .then(response => {
      if (!response.ok) throw new Error('GitHub calendar request failed');
      return response.json();
    })
    .then(render)
    .catch(() => { status.textContent = 'Не удалось загрузить активность. Она доступна в профиле GitHub.'; })
    .finally(() => clearTimeout(timeout));
})();
