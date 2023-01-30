'use strict';

togglbutton.render(
  'body.controller-issues.action-show #content h2:not(.toggl)',
  {},
  function (elem) {
    const numElem = $('#content h2');
    const titleElem = $('.subject h3') || '';
    const projectElem = $(".current-project");
    let description;

    if ($('.toggl-button')) {
      return;
    }

    if (titleElem) {
      description = titleElem.textContent;
    }

    if (numElem !== null) {
      if (description) {
        description = ' ' + description;
      }
      description = numElem.textContent + description;
    }

    const link = togglbutton.createTimerLink({
      className: 'redmine',
      description: description,
      projectName: projectElem && projectElem[0] && projectElem[0].textContent
    });

    $('#content h2').appendChild(link);
  }
);
