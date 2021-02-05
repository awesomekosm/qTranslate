/*!Public Domain 2017 Eugene Barnett*/
var qTranslate = function (jsonTranslation, lang, attrName, scope) {
    var allElements = null;
    if (scope) {
        allElements = document.querySelector(scope);
        allElements = allElements.querySelectorAll('[' + attrName + ']');
    } else {
        allElements = document.querySelectorAll('[' + attrName + ']');
    }
    var translateTo = function (language) {
        if (allElements && allElements.length > 0) {
            for (var i = 0; i < allElements.length; i++) {
                var attrValue = allElements[i].getAttribute(attrName);
                if (jsonTranslation[attrValue]) {
                    var translation = jsonTranslation[attrValue][language];
                    if (translation) {
                        allElements[i].innerHTML = translation;
                    }
                }
            }
        }
    };
    translateTo(lang);
    return {
        translateTo: translateTo
    };
};