let iconSpin = 0;
let backgroundChange = ['https://i.pinimg.com/originals/9f/4e/38/9f4e38d4634f2b584143be34d1324c0a.png', 'https://i.imgur.com/cB8yvSS.png', 'https://i.pinimg.com/originals/cf/1e/c4/cf1ec4b0c96e59657a46867a91bb0d1e.jpg', 'https://verdict4u.files.wordpress.com/2016/09/google-now-wallpaper-2.png', 'https://i.pinimg.com/originals/52/d6/c7/52d6c71626cae5ab4370e8b7ace8b0ec.jpg', 'http://freshwallpapers.net/download/8778/3840x2160/download/new-material-design.jpg', 'https://i.pinimg.com/originals/ef/7f/0a/ef7f0a0975ba1b50534549abe61d0b67.jpg', 'https://payload.cargocollective.com/1/0/5395/8999754/Launch-12-3-2014-copy_1000.jpg'];
let randomBackground = backgroundChange[Math.floor(Math.random()*backgroundChange.length)];

let defaultImage = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2017/04/Blog_coding-game.jpg';

//Languages Arrays
//Language Images
let languageImages = [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage];
//Language IDs
let languageID = ['htmlPager', 'cssPager', 'jsPager', 'phpPager', 'rubyPager', 'pythonPager'];
//Language Card Title
let langCardTitle = ['HTML', 'CSS', 'Javascript', 'php', 'Ruby', 'Python'];
//Language Card Secondary Text, Source COde Link
let langCardST = ['Source Code Link', 'Source Code Link', 'Source Code Link', 'Source Code Link', 'Source Code Link', 'Source Code Link'];
//Language Card Supporting Text, Description
let langCardDesc = ['', '', '', '', '', ''];

//Frameworks Arrays
//Framework Images
let frameworkImages = [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage];
//Framework Card Title
let frameCardTitle = ['AngularJS', 'Vue.js', 'Rails', 'Node.js', 'React', 'Ember.js'];
//Framework Card Secondary Text, Source COde Link
let frameCardST = ['Source Code Link', 'Source Code Link', 'Source Code Link', 'Source Code Link', 'Source Code Link', 'Source Code Link'];
//Framework Card Supporting Text, Description
let frameCardDesc = ['', '', '', '', '', ''];

//Frameworks Arrays
//Framework Images
let libraryImages = [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage];
//Framework Card Title
let libCardTitle = ['D3.js', 'jQuery', 'jQuery UI', 'QUnit', 'Ham', 'Snappy'];
//Framework Card Secondary Text, Source COde Link
let libCardST = ['Source Code Link', 'Source Code Link', 'Source Code Link', 'Source Code Link', 'Source Code Link', 'Source Code Link'];
//Framework Card Supporting Text, Description
let libCardDesc = ['', '', '', '', '', ''];

//Frameworks Arrays
//Framework Images
let resourceImages = [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage];
//Framework Card Title
let resoCardTitle = ['Trianglify', 'Material.io', 'Google Fonts', 'Coolors', 'Material Pallette', 'Image Color Picker'];
//Framework Card Secondary Text, Source COde Link
let resoCardST = ['https://trianglify.io/', 'https://material.io/', 'https://fonts.google.com/', 'https://coolors.co/', 'https://www.materialpalette.com/', 'https://imagecolorpicker.com/'];
//Framework Card Supporting Text, Description
let resoCardDesc = ['', '', '', '', '', ''];

$(document).ready(function() {
    
    
    $( function() {
        $( "#logoButton" ).draggable({ revert: true });
        console.log(randomBackground);
        $("#navSection").css('background-image', 'url(' + randomBackground + ')');
    } );
    $("#logoButton").dblclick(function() {
        let newRandoBg = backgroundChange[Math.floor(Math.random()*backgroundChange.length)];
        $("#navSection").css('background-image', 'url(' + newRandoBg + ')');
    });
    $("#menuButton").click(function() {
        if(iconSpin == 0){
            $("#sideMenu").show("slide");
            $('#menuButton').addClass("fa-spin");
            iconSpin++;
        }else{
            $("#sideMenu").hide("slide");
            $('#menuButton').removeClass("fa-spin");
            iconSpin--;
        }
    });
    
    generateContent();


});

//Generate Languages, Frameworks, Libraries, Resources
function generateContent() {
    $('#languageTitle').text('Languages');
    for(var i=0; i < 6; i++){
       $('<div class="mdc-section" id="' + languageID[i] + '">' +
            '<div class="mdc-card">' +
                '<div>' +
                    '<img src="' + languageImages[i] + '" class="mdc-image">' +
                '</div>' +
                '<div class="mdc-inner-card">' +
                    '<div>' + langCardTitle[i] + '</div>' +
                    '<div><a href="' + langCardST[i] + '" target="_blank">Source Code</a></div>' +
                    '<div>' + langCardDesc[i] + '</div>' +
                    '<div class="action-button-flex">' +
                        '<div></div>' +
                        '<div></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>').appendTo('#languages');
    }
    $('#frameworkTitle').text('Frameworks');
    for(var i=0; i < 6; i++){
       $('<div class="mdc-section">' +
            '<div class="mdc-card">' +
                '<div>' +
                    '<img src="' + frameworkImages[i] + '" class="mdc-image">' +
                '</div>' +
                '<div class="mdc-inner-card">' +
                    '<div>' + frameCardTitle[i] + '</div>' +
                    '<div><a href="' + frameCardST[i] + '" target="_blank">Source Code</a></div>' +
                    '<div>' + frameCardDesc[i] + '</div>' +
                    '<div class="action-button-flex">' +
                        '<div></div>' +
                        '<div></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>').appendTo('#frameworks');
    }
    $('#libraryTitle').text('Libraries');
    for(var i=0; i < 6; i++){
       $('<div class="mdc-section">' +
            '<div class="mdc-card">' +
                '<div>' +
                    '<img src="' + libraryImages[i] + '" class="mdc-image">' +
                '</div>' +
                '<div class="mdc-inner-card">' +
                    '<div>' + libCardTitle[i] + '</div>' +
                    '<div><a href="' + libCardST[i] + '" target="_blank">Source Code</a></div>' +
                    '<div>' + libCardDesc[i] + '</div>' +
                    '<div class="action-button-flex">' +
                        '<div></div>' +
                        '<div></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>').appendTo('#libraries');
    }
    $('#resourceTitle').text('Resources');
    for(var i=0; i < 6; i++){
       $('<div class="mdc-section">' +
            '<div class="mdc-card">' +
                '<div>' +
                    '<img src="' + resourceImages[i] + '" class="mdc-image">' +
                '</div>' +
                '<div class="mdc-inner-card">' +
                    '<div>' + resoCardTitle[i] + '</div>' +
                    '<div><a href="' + resoCardST[i] + '" target="_blank">Source Code</a></div>' +
                    '<div>' + resoCardDesc[i] + '</div>' +
                    '<div class="action-button-flex">' +
                        '<div></div>' +
                        '<div></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>').appendTo('#resources');
    }
};

function backToHome(){
    $('<div id="backHome">Back to Home</div>').appendTo();
}

function loadAllCategories(){
    $('#backHome').click(function() {
        generateContent();
    })
}

function generateHTMLPager(){
    $('#htmlPager').click(function(){
        $('#languageTitle').empty();
        $('#languages').empty();
    });
    backToHome();
}