// HEADER

// USE lowercase FOR ALL OPTIONS



var logotext = "VeteranJobInfo.us" // TEXT LOGO TEXT
var logotype = "graphic" // LOGO TYPE | graphic | text |
var logolink = "index.html" // LINK FOR LOGO


var headerimg = "no" // SHOW RIGHT HEADER IMAGE
var hicon = "header-icon-black.png" // HEADER ICON
var hiconlink = "contact.html" // ICON LINK



// LOGO

document.write('<div id="headerdiv" class="headercolor">');

if (logotype == "graphic") {
    document.write('<a href="' + logolink + '"><img src="images/logo.jpg" class="logo-respond" alt="VeteranJobInfo.us"></a>');
}
if (logotype == "text") {
    document.write('<div class="center-div td-middle">');
    document.write('<div OnSelectStart=\'return false;\' class="td-center td-middle"><a href="' + logolink + '" class="textlogo">' + logotext + '</a></div>');
    document.write('</div>');
}

document.write('</div>');



// HEADER ICON DELETE THESE LINES TO REMOVE

if (headerimg == "yes") {
    document.write('<div class="header-ico1 icohov printhide">');
    document.write('<a href="' + hiconlink + '"><img src="images/' + hicon + '" class="ico1-img" alt="Contact"></a>');
    document.write('</div>');
}