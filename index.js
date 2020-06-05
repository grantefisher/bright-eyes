
function downloadFile(content, filename){
    const url = URL.createObjectURL(contents);
    const a = document.createElement('a');

    a.href = url;
    a.download = filename || 'download';

    const clickHandler = () => {
        setTimeout(() => {
            setTimeout(() => {
                URL.revokeObjectURL(url);
                this.removeEventListener('click', clickHandler);
            }, 150);
        });
    };

    a.addEventListener('click', clickHandler, false);
    a.click();
    
    return a;
}




function UpdateView(id, destination){
    if (destination == "background"){
        var elems = document.getElementsByClassName("display");
        var x = document.getElementById(id).value;
        for (i = 0; i < x.length; i++){
            elems[i].style.background = x;
        }
    }
    else if (destination == "text"){
        var elems = document.getElementsByClassName("display");
        var x = document.getElementById(id).value;
        for (i = 0; i < x.length; i++) {
            elems[i].style.color = x;
        }
    }
    else{
        var x = document.getElementById(id).value;
        var elems = document.getElementsByClassName(destination);
        for (i = 0; i < elems.length; i++){
            elems[i].style.color = x;
        }
    }
}

function openLang(evt, lang){
    var i, content, links;
    content = document.getElementsByClassName("display");
    for (i = 0; i < content.length; i++){
        content[i].style.display = "none";
    }
    links = document.getElementsByClassName("links");
    for (i = 0; i < links.length; i++){
        links[i].className = links[i].className.replace(" active",  "");
    }
    document.getElementById(lang).style.display = "block";
    evt.currentTarget.className += " active";
}

function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:JSON;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function makePackage(){
    var finalJson = (`
{
    "name": "${document.getElementById('themeName').value}",
    "displayName": "${document.getElementById('themeName').value}",
    "description": "thank grant fisher for your color scheme",
    "version": "0.0.1",
    "engines": {
        "vscode": "^1.45.0"
    },
    "categories": [
        "Themes"
    ],
    "contributes": {
        "themes": [
            {
                "label": "${document.getElementById('themeName').value}",
                "uiTheme": "vs-light",
                "path": "./${document.getElementById('themeName').value}.json"
            }
        ]
    }
}
    `);
    download("package.json", finalJson);
}

function maketheme(){
    var finalJson = (`
{
    "name": \"${document.getElementById('themeName').value}\", 
    "type": \"${document.getElementById('settype').value}\", 
    "colors": { 
        "editor.background": \"${rgb2hex(document.getElementById('setbackground').value)}\",
        "editor.foreground": \"${rgb2hex(document.getElementById('settext').value)}\",
        "activityBarBadge.background": \"${rgb2hex(document.getElementById('setactivity').value)}\",
        "sideBarTitle.foreground": \"${rgb2hex(document.getElementById('setsidebar').value)}\"
    },
    "tokenColors": [
        {
            "name": "comment",
            "scope": [
                "comment",
                "punctuation.definition.comment"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setcomment').value)}\"
            }
        },
        {
            "name": "punctuation",
            "scope": [
                "punctuation.definition.block.js",
                "punctuation",
                "meta.brace.round.js",
                "meta.brace.square.js"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setpunc').value)}\"
            }
        },
        {
            "name": "mathematical operators",
            "scope": [
                "keyword.operator"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setoperators').value)}\"
            }
        },
        {
            "name": "numbers",
            "scope": [
                "constant.numeric.css",
                "constant.numeric.decimal.js",
                "constant.numeric.dec.python",
                "constant.numeric.float.python",
                "constant.numeric.decimal.cpp",
                "constant.numeric.decimal.point.cpp"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setnumbers').value)}\"
            }
        },
        {
            "name": "storage",
            "scope": [
                "storage.type.js",
                "support.type.python",
                "storage.type.built-in.primitive.cpp",
                
            ] ,
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setstorage').value)}\"
            }
        },
        {
            "name": "boolean",
            "scope": [
                "constant.language.python",
                "constant.language.boolean.true.js",
                "constant.language.boolean.false.js",
                "constant.language.true.cpp",
                "constant.language.false.cpp"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setbool').value)}\"
            }
        },
        {
            "name": "strings",
            "scope": [
                "string"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setstrings').value)}\"
            }
        },
        {
            "name": "include and import",
            "scope": [
                "keyword.control.import.js",
                "keyword.control.as.js",
                "keyword.control.from.js",
                "keyword.control.import.python",
                "keyword.control.directive.include.cpp"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setimport').value)}\"
            }
        },
        {
            "name": "class type",
            "scope": [
                "storage.type.class.js",
                "storage.type.class.python",                
                "meta.head.class.cpp"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setclass').value)}\"
            }
        },
        {
            "name": "class name",
            "scope": [
                "entity.name.type.class.python",
                "entity.name.type.class.js",
                "entity.name.type.js",
                "entity.name.type.class.cpp"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setclassname').value)}\"
            }
        },
        {
            "name": "function type",
            "scope": [
                "storage.type.function"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setfunctype').value)}\"
            }
        },
        {
            "name": "function name",
            "scope": [
                "entity.name.function"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setfuncdef').value)}\"
            }
        },
        {
            "name": "function arguments",
            "scope": [
                "meta.function-call.arguments", //args in python
                "meta.parameters.js"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setargs').value)}\"
            }
        },
        {
            "name": "self-reference",
            "scope": [
                "variable.language.this.js",
                "variable.parameter.function.language.special.self.python",
                "variable.language.this.cpp"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setselfref').value)}\"
            }
        },
        {
            "name": "return",
			"scope": [
                "keyword.control.return.cpp",
                "keyword.control.flow.js",
                "keyword.control.conditional.js",
                "keyword.control.if.cpp",
                "keyword.control.else.cpp",
                "keyword.control.flow.python"
            ],
			"settings": {
				"foreground": \"${rgb2hex(document.getElementById('setreturn').value)}\"
			}
        },
        {
            "name": "struct type (in c++)",
			"scope": "storage.type.struct.cpp",
			"settings": {
				"foreground": \"${rgb2hex(document.getElementById('setstructdef').value)}\"
			}
        },
        {
            "name": "namespace keyword and use (eg std::) (c++ specific)",
            "scope": [
                "entity.name.scope-resolution.cpp",
                "storage.type.namespace.directive.cpp",
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setnamespace').value)}\"
            }
        },
        {
            "name": "new (c++)",
            "scope": [
                "keyword.operator.new",
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setnew').value)}\"
            }
        },
        {
            "name": "sizeof (c++)",
            "scope": [
                "keyword.operator.sizeof"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setsizeof').value)}\"
            }
        },
        //HTML
        {
            "name": "DOCTYPE",
            "scope": "meta.tag.metadata.doctype.html",
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setdoctype').value)}\"
            }
        },
        {
            "name": "Unknown and Input and Other Tags",
            "scope": [
                "meta.tag.other.unrecognized.html.derivative",
                "meta.tag.structure.form",
                "meta.tag.structure",
                "meta.tag.object",
                "meta.tag.inline"

            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('settags').value)}\"
            }
        },
        {
            "name": "Html",
            "scope": [
                "meta.tag.structure.html.start.html",
                "meta.tag.structure.html.end.html"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('sethtmltag').value)}\"
            }
        },
        {
            "name": "Header",
            "scope": [
                "meta.tag.structure.header.start.html",
                "meta.tag.structure.header.end.html",
                "meta.tag.structure.head.start.html",
                "meta.tag.structure.head.end.html"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setheader').value)}\"
            }
        },
        {
            "name": "Body",
            "scope": [
                "meta.tag.structure.body.start.html",
                "meta.tag.structure.body.end.html"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('sethtmlbody').value)}\"
            }
        },
        {
            "name": "Footer",
            "scope": [
                "meta.tag.structure.footer.start.html",
                "meta.tag.structure.footer.end.html"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('sethtmlfooter').value)}\"
            }
        },
        {
            "name": "P tags",
            "scope": [
                "meta.tag.structure.p.start.html",
                "meta.tag.structure.p.end.html"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setptags').value)}\"
            }
        },
        {
            "name": "H1-H6 tags",
            "scope": [
                "meta.tag.structure.h1.start.html",
                "meta.tag.structure.h1.end.html",
                "meta.tag.structure.h2.start.html",
                "meta.tag.structure.h2.end.html",
                "meta.tag.structure.h3.start.html",
                "meta.tag.structure.h3.end.html",
                "meta.tag.structure.h4.start.html",
                "meta.tag.structure.h4.end.html",
                "meta.tag.structure.h5.start.html",
                "meta.tag.structure.h5.end.html",
                "meta.tag.structure.h6.start.html",
                "meta.tag.structure.h6.end.html"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('sethtags').value)}\"
            }
        },
        {
            "name": "Attributes",
            "scope": "entity.other.attribute-name.html",
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setattrs').value)}\"
            }
        },
        {
            "name": "Quotes",
            "scope": "string.quoted.double.html",
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setquotes').value)}\"
            }
        },
        {
            "name": "Image",
            "scope": "meta.tag.object.img.void.html",
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setimage').value)}\"
            }
        },
        {
            "name": "A tag",
            "scope": [
                "meta.tag.inline.a.start.html",
                "meta.tag.inline.a.end.html"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('seta').value)}\"
            }
        },
        {
            "name": "Script",
            "scope": [
                "meta.tag.metadata.script.start.html",
                "meta.tag.metadata.script.end.html"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setscript').value)}\"
            }
        },
        {
            "name": "Style",
            "scope": [
                "meta.tag.metadata.style.start.html",
                "meta.tag.metadata.style.end.html"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setstyle').value)}\"
            }
        },
        //CSS
        {
            "name": "Class",
            "scope": [
                "entity.other.attribute-name.class.css"
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setclasscss').value)}\"
            }
        },
        {
            "name": "Name Tag",
            "scope": "entity.name.tag.css",
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setnametag').value)}\"
            }
        },
        {
            "name": "ID",
            "scope": "entity.other.attribute-name.id.css",
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setid').value)}\"
            }
        },
        {
            "name": "Property",
            "scope": [
                "support.type.property-name.css",
                "meta.property-name.css",
                "entity.other.attribute-name.pseudo-element.css",
            ],
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setproperty').value)}\"
            }
        },
        {
            "name": "Non-Number Property Values",
            "scope": "meta.property-value.css",
            "settings": {
                "foreground": \"${rgb2hex(document.getElementById('setnonnum').value)}\"
            }
        },
    ]
}
    `);

    download((document.getElementById("themeName").value)+".json", finalJson);
}

function downloadTheme(){
    makePackage();
    maketheme();
}

function modalTheme(){
    //downloadTheme();
    document.getElementById("copypasta").style.display = "inline";
}

function modalThemeClose(){
    document.getElementById("copypasta").style.display = "none";
}