function dtime(d, type) {
    var dayNames;
    if (type == 1)
        dayNames = new Array('الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت');
    else
        dayNames = new Array('niedzieli', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت');
    var now = new Date();
    var month = now.getMonth() + 1;
    if ((now.getDate() + d + 1) < 1) {
        month--;
    }
    if (month < 10) {
        var month = '0' + month;
    }
    now.setDate(now.getDate() + d + 1);
    document.write(dayNames[now.getDay()] + ' ' + now.getDate() + "." + month + "." + now.getFullYear());
}