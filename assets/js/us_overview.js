(function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var render_items = [{"docid":"065559db-daed-4795-ac97-d26bd1723df8","root_ids":["1214","1322","1467","1617","1776","2027","2103"],"roots":{"1214":"ac1743c8-105e-4e8d-ba9a-cedfcf13efe0","1322":"0ea31ee2-203f-4192-9a84-4469a2877821","1467":"a9183a28-373d-40c7-a245-fb2759d39e55","1617":"1ce1b5b5-4ffb-45a9-8665-81eabc00239c","1776":"9886384a-22bd-4c3b-a664-76c4557c982c","2027":"8bfefd9f-caf8-4098-94de-d2bb5a7e9599","2103":"9128f474-1589-4677-9bf0-86b7dcd4a6b4"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();