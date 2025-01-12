function anchorFunctionality(imgId) {
  if (imgId === 'learnJava') {
    document.querySelector('.learnJavaDiv').style.display = 'block';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnHTML') {
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'block';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnCSS') {
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'block';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnJavascript') {
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'block';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnPython') {
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'block';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnMysql') {
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'block';
    document.querySelector('#clickLinkInstruction').style.display = 'bblock';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  }
}
