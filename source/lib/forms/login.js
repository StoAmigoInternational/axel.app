var DOMAIN = 'axel.org',
    FACEBOOK_APP_ID = DOMAIN == 'axel.org' ? '178551732274362' : '686285104834353',
    GOOGLE_APP_ID = '659914067642-3sak3lnsnq8rv24qgrp2jg6s3ga3r7e4.apps.googleusercontent.com',
    authWindow;
function initSignin () {
    jQuery('input[type=email]').prop({pattern: '^\\s*([A-Za-z0-9!#$%&*+/\\\-^=?_{|}~]+[.])*[A-Za-z0-9!#$%&*+/\\\-^=?_{|}~]+@(([A-Za-z0-9]+[.\-])*[A-Za-z0-9]+\\\.[A-Za-z]{2,})\\s*$'}).on('input', validateEmail);
    jQuery('.f_login_btn').on('click', openFacebookAuth);
    jQuery('.g_login_btn').on('click', openGoogleAuth);
    jQuery(window).on('message', function (event) {
        if (event.originalEvent.data.command == 'setAuthCookie') {
            onLoginSuccess();
        }
    });
}
function login (form) {
    var email = form.email.value.toLowerCase();
    jQuery.post('https://online.' + DOMAIN + '/opus/user', {
        _a: 'get_auth_types',
        email: email
    }).always(function (response) {

        if (response && response.code && response.code == '0') {

            /* Reverted back to stoamigo. */
            if (!response.data.length || response.data.indexOf('stoamigo') > -1 || response.data.indexOf('stoamigo_without_password') > -1 || response.data.indexOf('gccas') > -1) {

                location.href = 'https://login.' + DOMAIN + '/?email=' + encodeURIComponent(email) + '&auth_types=' + encodeURIComponent(JSON.stringify(response.data));
                ga('gtm1.send',{'hitType': 'event','eventCategory': 'New User','eventAction': 'Signs Up','eventLabel': 'using Signup for Free Button'});

            } else if (response.data.indexOf('facebook') > -1) {

                openFacebookAuth();

            } else if (response.data.indexOf('google') > -1) {

                openGoogleAuth();

            }

        } else {
            alert('Failed to sign in.');
        }
    });
    return false;
}
function validateEmail () {
    if (this.validity.patternMismatch) {
        this.setCustomValidity('Email has invalid format');
    } else {
        this.setCustomValidity('');
    }
}
function openFacebookAuth () {
    ga('gtm1.send',{'hitType': 'event','eventCategory': 'New User','eventAction': 'Signs Up','eventLabel': 'using Facebook Sign in Button'});
    openWindow('https://www.facebook.com/dialog/oauth?client_id=' + FACEBOOK_APP_ID + '&scope=email,publish_actions&redirect_uri=' + encodeURIComponent('https://static.' + DOMAIN + '/?auth=facebook&app=web'));
}
function openGoogleAuth () {
    ga('gtm1.send', {hitType: 'event', eventCategory: 'New User', eventAction: 'Signs Up', eventLabel: 'using Google Sign in Button'});
    openWindow('https://accounts.google.com/o/oauth2/auth?client_id=' + GOOGLE_APP_ID + '&scope=profile+email&response_type=code&redirect_uri=' + encodeURIComponent('https://online.' + DOMAIN + '/?auth=google&app=web'));
}
function openWindow (url) {
    var top = Math.round((screen.availHeight - 600) / 2),
        left = Math.round((screen.availWidth - 800) / 2),
        handle,
        ua = window.navigator.userAgent;
    if (authWindow && !authWindow.closed) {
        authWindow.location.href = url;
    } else {
        authWindow = window.open(url, 'authWindow', 'toolbar=0,menubar=0,status=0,width=800,height=600,top=' + (top < 0 ? 0 : top) + ',left=' + (left < 0 ? 0 : left));
    }
    authWindow.focus();
    if (ua.indexOf('MSIE ') > -1 || /Trident.*rv\:11\./.test(ua)) {
        handle = window.setInterval(function () {
            if (!authWindow || authWindow.closed) {
                window.clearInterval(handle);
                onLoginSuccess();
            }
        }, 100);
    }
}
function onLoginSuccess () {
    location.href = 'https://online.' + DOMAIN + '/';
}
jQuery(initSignin);

if (typeof ga === "undefined") function ga(){}


//if (typeof ga === "undefined") function ga(){}
