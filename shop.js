$(document).ready(function() {
    let rotationEnabled = false;

    $('.temp').each(function() {
        $(this).draggable({
            containment: '#shop', // Contain within their parent element
            scroll: false,
            start: function(event, ui) {
                if (!rotationEnabled) {
                    // Store the original position before dragging
                    ui.originalPosition = ui.position;
                }
            }
        }).resizable({
            containment: false,
            handles: 'n, e, s, w, ne, se, sw, nw',
            start: function(event, ui) {
                if (!rotationEnabled) {
                    // Store the original width and height before resizing
                    ui.originalSize = ui.size;
                }
            },
            resize: function(event, ui) {
                if (!rotationEnabled) {
                    // Set the width and height directly
                    $(this).width(ui.size.width);
                    $(this).height(ui.size.height);
                }
            }
        });
    });
});



$(document).ready(function() {
    let exampleElements = $('.example'); // Select all elements with the class "example"
    console.log(exampleElements);

    function removeHideClass(index) {
        if (index < exampleElements.length) {
            console.log( "index no is" + index);
            // Add "hide" class to all elements with the class "example"
            exampleElements.addClass('hide');

            // Remove "hide" class from the current element
            $(exampleElements[index]).removeClass('hide');

            // Call the function recursively for the next element after a delay
            setTimeout(function() {
                removeHideClass(index + 1);
            }, 5000); // 5000 milliseconds (5 seconds) delay
        }
        if(index>exampleElements.length || index==exampleElements.length){
            index=0;
            removeHideClass(0);
        }
    }

    removeHideClass(0);
});





