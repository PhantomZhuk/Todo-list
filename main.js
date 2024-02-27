let theme = `while`

$('.themesContainer').click(function () {
    if (theme == `while`) {
        $('.themeBox').animate({ left: '40px' }, `fast`);
        theme = `dark`;
        $(`.wrap`).css(`backgroundColor`, `#555`);
        $(`.wrap`).css(`color`, `#fff`);
        $(`#task`).css(`backgroundColor`, `#f8f8f8`);
        $(`.sun`).hide(1000);
        $(`.moon`).show(1000);
    } else if (theme == `dark`) {
        $('.themeBox').animate({ left: '0px' }, `fast`);
        theme = `while`;
        $(`.wrap`).css(`backgroundColor`, `#fff`);
        $(`.wrap`).css(`color`, `#333`);
        $(`#task`).css(`backgroundColor`, `#fff`);
        $(`.sun`).show(1000);
        $(`.moon`).hide(1000);
    }
});

let taskColor = '#999';

$('.hard').click(function () {
    taskColor = $('.hard').css('backgroundColor');
    $(`.coloHard`).show(100);
    $(`.coloMedium`).hide();
    $(`.coloDefault`).hide();

});

$('.medium').click(function () {
    taskColor = $('.medium').css('backgroundColor');
    $(`.coloHard`).hide();
    $(`.coloMedium`).show(100);
    $(`.coloDefault`).hide();

});
$('.default').click(function () {
    taskColor = $('.default').css('backgroundColor');
    $(`.coloHard`).hide();
    $(`.coloMedium`).hide();
    $(`.coloDefault`).show(100);

});

$('#add').click(function () {
    let currentDate = new Date();
    if ($('#task').val()) {
        let task = $('#task').val();
        $('.taskContainer').prepend(`<div style="background-color: ${taskColor};" class='taskItem'>
        <textarea name="changeTask" class="changeTask" id="changeTask" cols="30" rows="10">${task}</textarea>
        <p>${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} 
        ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}</p>
        <button class="done"><i class="fa-regular fa-square-check"></i></button>
        </div>`);
        $(`.taskLevel`).hide();
        $('#task').val('');
        $(`.coloHard`).hide();
        $(`.coloMedium`).hide();
        $(`.coloDefault`).hide();
        taskColor = '#999';
    }

    $('.taskItem').dblclick(function () {
        $(this).remove();
    }); 
})

$(document).on('click', '.done', function () {
    let $parent = $(this).parent();

    if ($parent.hasClass('completedTask')) {
        $parent.removeClass('completedTask');
    } else {
        $parent.addClass('completedTask');
    }
});


$('#task').on('input', function () {
    if ($('#task').val().length > 0) {
        $('.taskLevel').css('display', 'flex');
    } else {
        $('.taskLevel').css('display', 'none');
    }
})


$(`.btnFilter`).click(function () {
    $(`.filterBox`).slideToggle(`slow`)
})

//filter
// додає на початок .prepend

$('.hardimportant').click(function () {
    $('.taskItem').hide();
    let elementsToShow = $('.taskItem').filter(function () {
        return $(this).css('background-color') === 'rgb(236, 83, 83)';
    });

    elementsToShow.show();
});

$('.mediumimportant').click(function () {
    $('.taskItem').hide();
    let elementsToShow = $('.taskItem').filter(function () {
        return $(this).css('background-color') === 'rgb(243, 169, 33)';
    });

    elementsToShow.show();
});

$('.defaultimportant').click(function () {
    $('.taskItem').hide();
    let elementsToShow = $('.taskItem').filter(function () {
        return $(this).css('background-color') === 'rgb(153, 153, 153)';
    });

    elementsToShow.show();
});

$('.allimportant').click(function () {
    $('.taskItem').show();  
});

$(`.fromAToZ`).click(function(){
    $(`.taskContainer`).css(`flexDirection`, `column`);
})

$(`.fromZToA`).click(function(){
    $(`.taskContainer`).css(`flexDirection`, `column-reverse`);
})