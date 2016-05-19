$(document).ready(function() {
    var listo = [];
    $('#newTaskForm').hide();

    var Task = function(task) {
        this.task = task;
        this.id = 'new';
    };

    var addTask = function(task) {
        if (task) {
            task = new Task(task);
            listo.push(task);
            $('#newItemInput').val('');
            $('#newList').append(
                '<a href="#finish" class="" id="item">' +
                '<li class="list-group-item">' +
                '<h3>' + task.task + '</h3>' +
                '<span class="arrow pull-right">' +
                '<i class="glyphicon glyphicon-arrow-right">' +
                '</span>' +
                '</li>' +
                '</a>'
            );
        };
        $('#newTaskForm').slideToggle('fast', 'linear');
    }; // addTask

    $('#saveNewItem').on('click', function(e) {
        e.preventDefault();
        var task = $('#newItemInput').val().trim();
        addTask(task);
    });

    $('#add-todo').on('click', function() {
        $('#newTaskForm').fadeToggle('fast', 'linear');
    });

    $('#cancel').on('click', function(e) {
        e.preventDefault();
        $('#newTaskForm').fadeToggle('fast', 'linear');
    });



}); // doc ready
