function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Frame() {
    this.bounceFrameCounter = 0;

    this.bounceFrame = function() {
        if (this.bounceFrameCounter % 4 == 0) {
            var newX = getRandomInt(-1, 1);
            var newY = getRandomInt(-1, 1);
            $('#frame').css('left', newX + 'px');
            $('#frame').css('top', newY + 'px');
        }
        this.bounceFrameCounter++;
    };
    this.bounceLines = function() {
        var line1X = getRandomInt(40, 42);
        var line2X = getRandomInt(878, 880);
        $('#line1').css('left', line1X + 'px');
        $('#line2').css('left', line2X + 'px');
    };
    this.bounceLuminosity = function() {
        var newOpacity = getRandomInt(0, 10) * 0.01; 
        $('#luminosity').css('opacity', newOpacity);
    };
}

function Timeline(container, frames) {
    this.counter = 0;

    this.container = container;
    this.frames = frames;

    this.currFrame = 0;
    this.finalFrame = this.frames.length - 1;

    this.update = function (position) { 
        this.currFrame = this.finalFrame;
        for (i = 0; i < this.frames.length; i++) {
           if (position < this.frames[i].position) {
               this.currFrame = i-1;
               break;
           }
        }
        $('#' + this.container).children().hide();
        $('#' + this.frames[this.currFrame].id).show();
    };
}

$(document).ready(function () {
    $('div#backgrounds > div:hidden, div#foregrounds > div:hidden, div#captions > div:hidden').show().hide();

    $('#ui-report').hover(function () {
        $('#ui-hover-report').show();
    }, function () {
        $('#ui-hover-report').hide();
    });
    $('#ui-diagnose').hover(function () {
        $('#ui-hover-diagnose').show();
    }, function () {
        $('#ui-hover-diagnose').hide();
    });
    $('#ui-cure').hover(function () {
        $('#ui-hover-cure').show();
    }, function () {
        $('#ui-hover-cure').hide();
    });
    $('#ui-report').click(function () {
	$('html, body').animate({ 'scrollTop' : 19200 });
	return false;
    });
    $('#ui-diagnose').click(function () {
	$('html, body').animate({ 'scrollTop' : 19800 });
	return false;
    });
    $('#ui-cure').click(function () {
	$('html, body').animate({ 'scrollTop' : 21300 });
	return false;
    });
    $('#ui-sound').click(function () {
	if (soundManager.getSoundById('super8').muted == 0) {
            soundManager.mute('super8');
            $(this).css('background-position', 'center -45px');
        } else {
            soundManager.unmute('super8');
            $(this).css('background-position', 'center top');
        }
	return false;
    });

    $('#traffic-icon').click(function () {
        $('html, body').animate({ 'scrollTop' : 10600 });
        return false;
    });
    $('#traffic-report').click(function () {
        $('html, body').animate({ 'scrollTop' : 19200 });
        return false;
    });

    $('#slate-4-report').click(function () {
	$('html, body').animate({ 'scrollTop' : 19200 });
	return false;
    });
    $('#slate-4-diagnose').click(function () {
	$('html, body').animate({ 'scrollTop' : 19800 });
	return false;
    });
    $('#slate-4-cure').click(function () {
	$('html, body').animate({ 'scrollTop' : 21300 });
	return false;
    });

    $('a.report-checkbox, button.report-checkbox').click(function () {
	$('#' + $(this).attr('rel')).val( $('#' + $(this).attr('rel')).val() == 'Yes' ? 'No' : 'Yes' );
        $(this).toggleClass('report-checked');
        return false;
    });
    $('#report-form-submit, button#report-form-submit').click(function () {
        if ($.trim($('#report-form input#report-first_name').val()) == '' || $.trim($('#report-form input#report-last_name').val()) == '' || $.trim($('#report-form input#report-email').val()) == '') {
            $('#report-form-empty').show().delay(1000).fadeOut();
        } else if ( ! $('#report-accept').hasClass('report-checked') ) {
            $('#report-form-not-accepted').show().delay(1000).fadeOut();
        } else {
            $.post('mail.php', $('#report-form').serialize(), function() {
                $('#report-form-thanks').show().delay(1000).fadeOut();
                $('#report-form input').val('');
                $('#report-accept').removeClass('report-checked');
                $('#report-enter').addClass('report-checked');
                $('input#terms_accepted').val('No');
                $('input#sweepstakes').val('Yes');
            });
        }
        return false;
    });

    $('a.diagnose-checkbox, button.diagnose-checkbox').click(function () {
        $(this).toggleClass('diagnose-checked');
        return false;
    });
    $('a#diagnose-submit, button#diagnose-submit').click(function () {
        checkedBoxes = $('a.diagnose-checked, button.diagnose-checked').length;
        if (checkedBoxes < 3) {
            $('#background-diagnose .frame-content').css('background-image', 'url(img/diagnose-1.png)');
            captionFrame.frames[25].id = 'caption-diagnose-1';
            $('#caption-diagnose-1').show();
            $('#caption-diagnose').hide();
        } else if (checkedBoxes < 5) {
            $('#background-diagnose .frame-content').css('background-image', 'url(img/diagnose-2.png)');
            captionFrame.frames[25].id = 'caption-diagnose-2';
            $('#caption-diagnose-2').show();
            $('#caption-diagnose').hide();
        } else if (checkedBoxes < 7) {
            $('#background-diagnose .frame-content').css('background-image', 'url(img/diagnose-3.png)');
            captionFrame.frames[25].id = 'caption-diagnose-3';
            $('#caption-diagnose-3').show();
            $('#caption-diagnose').hide();
        } else {
            $('#background-diagnose .frame-content').css('background-image', 'url(img/diagnose-4.png)');
            captionFrame.frames[25].id = 'caption-diagnose-4';
            $('#caption-diagnose-4').show();
            $('#caption-diagnose').hide();
        }
        return false;
    });

    $('#cure-steps-report').click(function () {
	$('html, body').animate({ 'scrollTop' : 19200 });
	return false;
    });

    backgroundFrames = [
        { 'id' : 'background-title', 'position' : 0 },

        { 'id' : 'background-slate-1', 'position' : 300 },

        { 'id' : 'background-wide-1', 'position' : 600 },
        { 'id' : 'background-wide-2', 'position' : 900 },
        { 'id' : 'background-wide-3', 'position' : 1200 },
        { 'id' : 'background-wide-4', 'position' : 1500 },

        { 'id' : 'background-close-1', 'position' : 1800 },
        { 'id' : 'background-close-2', 'position' : 2100 },
        { 'id' : 'background-close-3', 'position' : 2400 },
        { 'id' : 'background-close-4', 'position' : 2700 },

        { 'id' : 'background-traffic_stop', 'position' : 3000 },

        { 'id' : 'background-epidemic-1', 'position' : 4800 },
        { 'id' : 'background-epidemic-2', 'position' : 5100 },
        { 'id' : 'background-epidemic-3', 'position' : 5400 },
        { 'id' : 'background-epidemic-4', 'position' : 5700 },

        { 'id' : 'background-super_close-1', 'position' : 6000 },
        { 'id' : 'background-super_close-blank', 'position' : 6300 },
        { 'id' : 'background-super_close-2', 'position' : 6600 },

        { 'id' : 'background-wide-1', 'position' : 7800 },
        { 'id' : 'background-wide-2', 'position' : 8100 },
        { 'id' : 'background-wide-3', 'position' : 8400 },
        { 'id' : 'background-wide-4', 'position' : 8700 },

        { 'id' : 'background-wide-1', 'position' : 9000 },
        { 'id' : 'background-wide-2', 'position' : 9300 },
        { 'id' : 'background-wide-3', 'position' : 9600 },
        { 'id' : 'background-wide-4', 'position' : 9900 },

        { 'id' : 'background-slate-2', 'position' : 10200 },

        { 'id' : 'background-symptoms', 'position' : 10500 },

        { 'id' : 'background-slate-3', 'position' : 14700 },

        { 'id' : 'background-wide-1', 'position' : 15000 },
        { 'id' : 'background-wide-2', 'position' : 15300 },
        { 'id' : 'background-wide-3', 'position' : 15600 },
        { 'id' : 'background-wide-4', 'position' : 15900 },

        { 'id' : 'background-cure-1', 'position' : 16200 },
        { 'id' : 'background-cure-2', 'position' : 16500 },
        { 'id' : 'background-cure-3', 'position' : 16800 },
        { 'id' : 'background-cure-4', 'position' : 17100 },

        { 'id' : 'background-wide-1', 'position' : 17400 },
        { 'id' : 'background-wide-2', 'position' : 17700 },
        { 'id' : 'background-wide-3', 'position' : 18000 },
        { 'id' : 'background-wide-4', 'position' : 18300 },

        { 'id' : 'background-slate-4', 'position' : 18600 },

        { 'id' : 'background-report', 'position' : 18900 },

        { 'id' : 'background-diagnose', 'position' : 19500 },

        { 'id' : 'background-cure-steps', 'position' : 20100 }
    ];
    backgroundFrame = new Timeline('backgrounds', backgroundFrames);
    foregroundFrames = [
        { 'id' : 'foreground-empty', 'position' : 0 },

        { 'id' : 'foreground-doc-wide-1', 'position' : 600 },
        { 'id' : 'foreground-doc-wide-2', 'position' : 750 },
        { 'id' : 'foreground-doc-wide-1', 'position' : 900 },
        { 'id' : 'foreground-doc-wide-2', 'position' : 1050 },
        { 'id' : 'foreground-doc-wide-1', 'position' : 1200 },
        { 'id' : 'foreground-doc-wide-2', 'position' : 1350 },
        { 'id' : 'foreground-doc-wide-1', 'position' : 1500 },
        
        { 'id' : 'foreground-doc-close-1', 'position' : 1800 },
        { 'id' : 'foreground-doc-close-2', 'position' : 1950 },
        { 'id' : 'foreground-doc-close-1', 'position' : 2100 },
        { 'id' : 'foreground-doc-close-2', 'position' : 2250 },
        { 'id' : 'foreground-doc-close-1', 'position' : 2400 },
        { 'id' : 'foreground-doc-close-2', 'position' : 2550 },
        { 'id' : 'foreground-doc-close-1', 'position' : 2700 },

        { 'id' : 'foreground-empty', 'position' : 3000 },

        { 'id' : 'foreground-doc-wide-1', 'position' : 7800 },
        { 'id' : 'foreground-doc-wide-2', 'position' : 7950 },
        { 'id' : 'foreground-doc-wide-1', 'position' : 8100 },
        { 'id' : 'foreground-doc-wide-2', 'position' : 8250 },
        { 'id' : 'foreground-doc-wide-1', 'position' : 8400 },
        { 'id' : 'foreground-doc-wide-2', 'position' : 8550 },
        { 'id' : 'foreground-doc-wide-1', 'position' : 8700 },

        { 'id' : 'foreground-doc-pointing-1', 'position' : 9000 },
        { 'id' : 'foreground-doc-pointing-2', 'position' : 9150 },
        { 'id' : 'foreground-doc-pointing-1', 'position' : 9300 },
        { 'id' : 'foreground-doc-pointing-2', 'position' : 9450 },
        { 'id' : 'foreground-doc-pointing-1', 'position' : 9600 },
        { 'id' : 'foreground-doc-pointing-2', 'position' : 9750 },
        { 'id' : 'foreground-doc-pointing-1', 'position' : 9900 },

        { 'id' : 'foreground-empty', 'position' : 10200 },

        { 'id' : 'foreground-symptoms-1', 'position' : 10500 },
        { 'id' : 'foreground-symptoms-2', 'position' : 10800 },
        { 'id' : 'foreground-symptoms-3', 'position' : 11100 },
        { 'id' : 'foreground-symptoms-4', 'position' : 11400 },
        { 'id' : 'foreground-symptoms-5', 'position' : 11700 },
        { 'id' : 'foreground-symptoms-6', 'position' : 12000 },
        { 'id' : 'foreground-symptoms-7', 'position' : 12300 },
        { 'id' : 'foreground-symptoms-8', 'position' : 12600 },
        { 'id' : 'foreground-symptoms-9', 'position' : 12900 },
        { 'id' : 'foreground-symptoms-10', 'position' : 13200 },

        { 'id' : 'foreground-empty', 'position' : 14700 },

        { 'id' : 'foreground-doc-pointing-1', 'position' : 15000 },
        { 'id' : 'foreground-doc-pointing-2', 'position' : 15150 },
        { 'id' : 'foreground-doc-pointing-1', 'position' : 15300 },
        { 'id' : 'foreground-doc-pointing-2', 'position' : 15450 },
        { 'id' : 'foreground-doc-pointing-1', 'position' : 15600 },
        { 'id' : 'foreground-doc-pointing-2', 'position' : 15750 },
        { 'id' : 'foreground-doc-pointing-1', 'position' : 15900 },

        { 'id' : 'foreground-empty', 'position' : 16200 },

        { 'id' : 'foreground-doc-wide-1', 'position' : 17400 },
        { 'id' : 'foreground-doc-wide-2', 'position' : 17550 },
        { 'id' : 'foreground-doc-wide-1', 'position' : 17700 },
        { 'id' : 'foreground-doc-wide-2', 'position' : 17850 },
        { 'id' : 'foreground-doc-wide-1', 'position' : 18000 },
        { 'id' : 'foreground-doc-wide-2', 'position' : 18150 },
        { 'id' : 'foreground-doc-wide-1', 'position' : 18300 },

        { 'id' : 'foreground-empty', 'position' : 18600 }
    ];
    foregroundFrame = new Timeline('foregrounds', foregroundFrames);
    captionFrames = [
        { 'id' : 'caption-scroll', 'position' : 0 },

        { 'id' : 'caption-empty', 'position' : 300 },

        { 'id' : 'caption-welcome', 'position' : 600 },

        { 'id' : 'caption-intro', 'position' : 1800 },

        { 'id' : 'caption-traffic_stop-1', 'position' : 3000 },
        { 'id' : 'caption-traffic_stop-2', 'position' : 3600 },
        { 'id' : 'caption-traffic_stop-3', 'position' : 4200 },

        { 'id' : 'caption-epidemic', 'position' : 4800 },

        { 'id' : 'caption-empty', 'position' : 6000 },

        { 'id' : 'caption-super_close', 'position' : 6600 },

        { 'id' : 'caption-in_a_moment', 'position' : 7800 },

        { 'id' : 'caption-but_first', 'position' : 9000 },

        { 'id' : 'caption-empty', 'position' : 10200 },

        { 'id' : 'caption-symptoms-links-1', 'position' : 10800 },
        { 'id' : 'caption-symptoms-links-2', 'position' : 11100 },
        { 'id' : 'caption-symptoms-links-3', 'position' : 11400 },
        { 'id' : 'caption-symptoms-links-4', 'position' : 12900 },
        { 'id' : 'caption-symptoms-links-5', 'position' : 13200 },
        { 'id' : 'caption-symptoms', 'position' : 13500 },

        { 'id' : 'caption-empty', 'position' : 14700 },

        { 'id' : 'caption-cure_research', 'position' : 15000 },

        { 'id' : 'caption-cure_link', 'position' : 16200 },

        { 'id' : 'caption-call_to_action', 'position' : 17400 },

        { 'id' : 'caption-slate-4', 'position' : 18600 },

        { 'id' : 'caption-report', 'position' : 18900 },

        { 'id' : 'caption-diagnose', 'position' : 19500 },

        { 'id' : 'caption-cure-steps', 'position' : 20100 }
    ];
    captionFrame = new Timeline('captions', captionFrames);

    frameish = new Frame();


    scrollReminder = 0;

    $(window).scroll(function () {
        frameish.bounceFrame();
        frameish.bounceLines();
        frameish.bounceLuminosity();
        backgroundFrame.update($(window).scrollTop());
        foregroundFrame.update($(window).scrollTop());
        captionFrame.update($(window).scrollTop());
        $('#scroll-reminder').hide();
        if (scrollReminder) {
            clearTimeout(scrollReminder);
            scrollReminder = 0;
        }
        if (scrollReminder == 0 && $(window).scrollTop() < 20100) {
            scrollReminder = setTimeout(function () {
                $('#scroll-reminder').fadeIn();
            }, 2000);
        }
    });
});
