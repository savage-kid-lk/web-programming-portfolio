function showMenu() {
  document.getElementById('menuBar').style.opacity = 0;
  document.getElementById('menuNavigation').classList.add('show');
  event.stopPropagation();
}
function removeMenu() {
  document.getElementById('menuBar').style.opacity = 1;
  document.getElementById('menuNavigation').classList.remove('show');
}
function anchorFunctionality(imgId) {
  if (imgId === 'learnJava') {
    document.querySelector('.learnLinuxDiv').style.display = 'none';
    document.querySelector('.learnOfficeDiv').style.display = 'none';
    document.querySelector('.learnJavaDiv').style.display = 'block';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnHTML') {
    document.querySelector('.learnLinuxDiv').style.display = 'none';
    document.querySelector('.learnOfficeDiv').style.display = 'none';
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'block';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnCSS') {
    document.querySelector('.learnLinuxDiv').style.display = 'none';
    document.querySelector('.learnOfficeDiv').style.display = 'none';
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'block';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnJavascript') {
    document.querySelector('.learnLinuxDiv').style.display = 'none';
    document.querySelector('.learnOfficeDiv').style.display = 'none';
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'block';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnPython') {
    document.querySelector('.learnLinuxDiv').style.display = 'none';
    document.querySelector('.learnOfficeDiv').style.display = 'none';
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'block';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnMysql') {
    document.querySelector('.learnLinuxDiv').style.display = 'none';
    document.querySelector('.learnOfficeDiv').style.display = 'none';
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'block';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  } else if (imgId === 'learnLinux') {
    document.querySelector('.learnLinuxDiv').style.display = 'block';
    document.querySelector('.learnOfficeDiv').style.display = 'none';
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  }else if (imgId === 'learnOffice') {
    document.querySelector('.learnLinuxDiv').style.display = 'none';
    document.querySelector('.learnOfficeDiv').style.display = 'block';
    document.querySelector('.learnJavaDiv').style.display = 'none';
    document.querySelector('.learnHTMLDiv').style.display = 'none';
    document.querySelector('.learnCSSDiv').style.display = 'none';
    document.querySelector('.learnJavaScriptDiv').style.display = 'none';
    document.querySelector('.learnPythonDiv').style.display = 'none';
    document.querySelector('.learnMySQLDiv').style.display = 'none';
    document.querySelector('#clickLinkInstruction').style.display = 'block';
    document.getElementById('clickLinkInstruction').scrollIntoView({ behavior: 'smooth' });
  }
}
