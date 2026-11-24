function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'get';
  const props = PropertiesService.getScriptProperties();
  let count = Number(props.getProperty('COUNTER_COUNT') || '0');

  if (action === 'increment') {
    count += 1;
    props.setProperty('COUNTER_COUNT', String(count));
  }

  return ContentService
    .createTextOutput(JSON.stringify({ count: count }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const payload = e && e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
  const action = payload.action || 'get';
  const props = PropertiesService.getScriptProperties();
  let count = Number(props.getProperty('COUNTER_COUNT') || '0');

  if (action === 'increment') {
    count += 1;
    props.setProperty('COUNTER_COUNT', String(count));
  }

  return ContentService
    .createTextOutput(JSON.stringify({ count: count }))
    .setMimeType(ContentService.MimeType.JSON);
}

function resetCounter() {
  PropertiesService.getScriptProperties().deleteProperty('COUNTER_COUNT');
  return { count: 0 };
}
