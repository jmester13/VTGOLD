'use strict';
/**
 * From thread https://ckeditor.com/old/forums/CKEditor-3.x/Disable-Enter-Key
 */

( function() {
  var pluginName = 'title_html';
  var doNothingCmd =
    {
        exec : function( editor )
        {
            return;
        }
    };
  CKEDITOR.plugins.add( pluginName, {
    //icons: 'abbr',
    init: function( editor ) {
        editor.addCommand( 'doNothing', doNothingCmd );
    }
  });
})();
