const convert = (value, key = null) => {
    if (value === null) {
      return key ? `<null name="${key}"/>` : `<null/>`;
    }
  
    if (typeof value === 'string') {
      return key ? `<string name="${key}">${value}</string>` : `<string>${value}</string>`;
    }
  
    if (typeof value === 'number') {
      return key ? `<number name="${key}">${value}</number>` : `<number>${value}</number>`;
    }
  
    if (typeof value === 'boolean') {
      return key ? `<boolean name="${key}">${value}</boolean>` : `<boolean>${value}</boolean>`;
    }
  
    if (Array.isArray(value)) {
      let xml = key ? `<array name="${key}">` : `<array>`;
      for (let item of value) {
        xml += convert(item);
      }
      xml += `</array>`;
      return xml;
    }
  
    if (typeof value === 'object') {
      let xml = key ? `<object name="${key}">` : `<object>`;
      for (let k in value) {
        xml += convert(value[k], k);
      }
      xml += `</object>`;
      return xml;
    }
  
    return '';
  };
  



  window.convertToXml = () => {
    const input = document.getElementById('jsonInput').value;
    const output = document.getElementById('output');
  
    try {
      const json = JSON.parse(input);
      const rawXml = convert(json);
      const prettyXml = window.vkbeautify.xml(rawXml);
      output.textContent = prettyXml;



      const blob = new Blob([prettyXml], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const downloadBtn = document.getElementById('downloadBtn');
  
      downloadBtn.style.display = 'inline-block';
      downloadBtn.onclick = () => {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.xml';
        a.click();
      };
    } catch (e) {
      output.textContent = `❌ Error: ${e.message}`;
    }
  };
  export default convert;
  