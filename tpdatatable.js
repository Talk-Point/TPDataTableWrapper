// Modul TP
var TP = TP || {};
TP.DataTable = {
    init: function(position, url, settings) {
        this.settings = settings;
        this.settings['columnDefs'] = this.settings.colloums.map(function(data, index){
            return {
                "render": data.renderCall,
                "targets": index
            };
        });

        var defaults = {
            "ajax": url,
            "columns": this.settings.colloums,
            "columnDefs": this.settings.columnDefs,
            "dom": 'T<"clear">lfrtip',
            tableTools: {
                "sSwfPath": "swf/copy_csv_xls_pdf.swf"
            }
        };

        this.table = $(position).dataTable(defaults);
        return this;
    }
};

/*$.extend( $.fn.dataTable.defaults, {          // Überschreiben von Defaults
    "searching": false,
    "ordering": false
} );*/
// Auf der Seite
$(document).ready(function() {


    var table = TP.DataTable.init('#example', 'objects.txt', {
        "colloums": [
            {
                "data": "name",
                "renderCall": function(data, type, row, meta){
                    return '<a href="http://www.google.de"><button title="Click to copy me.">'+data+'</button></a>';
                }
            },
            {"data": "position", "renderCall": function(data, type, row, meta){return data}},
            {"data": "office", "renderCall": function(data, type, row, meta){return data + 'mein daten3'}},
            {"data": "extn", "renderCall": function(data, type, row, meta){return data + 'mein daten4'}},
            {"data": "start_date", "renderCall": function(data, type, row, meta){return data + 'mein daten5'}},
            {"data": "salary", "renderCall": function(data, type, row, meta){return data + 'mein daten6'}}
        ]
    });

    var tt = new $.fn.dataTable.TableTools( table, {
        sRowSelect: 'single'
    } );
    $( tt.fnContainer() ).insertAfter('div.info');
} );