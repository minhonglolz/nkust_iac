function ajaxtest() {

    $.ajax({
        url: 'http://140.133.78.134/api/pfev/import_20200106/importProfessors',
        type: 'POST',
        data: {},
    }).done(function(response) {
        // var response = JSON.parse(response);
        console.log(response);
        let addhtml
        response.forEach(function(item) {
            addhtml = "<tr>"
            addhtml += "<td>" + item['教師姓名'] + "</td>"
            addhtml += "<td>" + item['教師姓名'] + "</td>"
            addhtml += "<td>" + item['教師姓名'] + "</td>"
            addhtml += "<td>" + item['教師姓名'] + "</td>"
            addhtml += "<td>" + item['教師姓名'] + "</td>"
            addhtml += "<td><button>詳細資訊</button></td>"
            addhtml += "</tr>"
            $('tbody').append(addhtml)
        });


    }).fail(function() {
        alertDanger('錯誤', '無法與伺服器取得連線');
    });
}