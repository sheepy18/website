{
    var component = {
        name:'menu',

        ccm: { 
            url: 'https://ccmjs.github.io/ccm/ccm.js'
        },

        config: {
            menu_id: 'menu',
            css:['ccm.load', 'menu_default.css'],
            menuitem: ['ccm.component', 'ccm-menuitem.js']
        },

        Instance: function() {
            const self = this; 

            this.start = callback => {
                self.element.innerHTML = `<div id=${self.menu_id}>  </div>`;
                self.element.querySelector( '#menu' ).appendChild( self.menuitem.root );
            } 
        }

    };



      function p(){window.ccm[v].component(component)}var f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{var n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{var e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}

}
