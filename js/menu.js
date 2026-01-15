// Begin

// NOTE: If you use a ' add a slash before it like this \'



var menuside = "center" // MENU SIDE | left | right | center |



document.write('<div id="menudiv" class="td-' + menuside + ' printhide">');
document.write('<div id="mobile-menu-icon" onclick="javascript:toggleMenu(\'menusub\');">');

// MOBILE 3 BAR MENU

document.write('<img src="images/mobile-menu-icon-white.png" width="100" height="29" class="menu-icon-img" alt="Open Menu">');

document.write('</div>');
document.write('<div id="menusub">');



// START MENU LINKS - COPY ANY LINE TO ADD A NEW LINK


document.write('<a href="index.html">Home</a>');


document.write('<a href="job-search-faqs.html">Job Search FAQs</a>');


document.write('<a href="va-office-directory.html">VA Office Directory</a>');


// document.write('<a href="#">Veteran\'s Discussion</a>');


document.write('<a href="vet-friendly-companies.html">Vet-Friendly Companies</a>');


document.write('<a href="job-search-checklist.html">Job-Search Checklist</a>');

document.write('<a href="disabled-veteran-resources.html">Disabled Veteran Resources</a>');


document.write('<a href="contact.html">Contact</a>');


// END MENU LINKS



document.write('</div>');
document.write('</div>');