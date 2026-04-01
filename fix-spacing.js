const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'app', '(frontend)');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = walkSync(targetDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace container divs that have inline padding 120px
  content = content.replace(/className="(.*?)"\s*style=\{\{\s*paddingTop:\s*['"]120px['"](?:,\s*paddingBottom:\s*['"]80px['"])?(?:,\s*minHeight:\s*['"](?:60|80)vh['"])?\s*\}\}/g, 'className="$1 inner-page"');
  content = content.replace(/className="(.*?)"\s*style=\{\{\s*paddingTop:\s*['"]120px['"](?:,\s*minHeight:\s*['"](?:60|80)vh['"])?(?:,\s*paddingBottom:\s*['"]80px['"])?\s*\}\}/g, 'className="$1 inner-page"');
  
  // Replace page-header inline styles that conflict
  content = content.replace(/className="page-header" style=\{\{ padding: '120px 20px 60px' \}\}/g, 'className="page-header inner-page"');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed spacing in:', file);
  }
});
