$(document).ready(function() {
  var url = 'https://api.github.com/users/pineapplechiu/events';
  
  $.ajax(url).done(function(data) {
    var lastEvent = data.filter(function(event) { // filtering data with anonymous function
      return event.type === 'PushEvent' // event is the object
    })[0];
    // console.log(lastEvent);
    // retrieve last commit information
    var currentDate = moment();
    var commitDate = moment(lastEvent.created_at);
    var commitMonth = commitDate.month();
    var commitDay = commitDate.day();
    // console.log(commitMonth)
    // console.log(commitDay)
    var daysSince = currentDate.subtract(commitDay, 'days').day();
    var monthsSince = currentDate.subtract(commitMonth, 'months').month();
    var hoursSince = currentDate.subtract(commitDate.hour(), 'hours').hour();
    var minutesSince = currentDate.subtract(commitDate.minute(), 'minutes').minute();
    var timeSince = daysSince.toString() + ' day(s)';
    if (monthsSince > 0) {
      timeSince = monthsSince.toString() + ' month(s) and ' + timeSince;
    }
    // console.log(daysSince)
    // console.log(monthsSince)
    // console.log(hoursSince)
    // console.log(minutesSince)
    var commitSha = lastEvent.payload.commits[0].sha;
    // github.com/:username/:repo/commit/:sha
    var commitUrl = 'https://github.com/' + lastEvent.repo.name + '/commit/' + commitSha;
    commitSha = commitSha.substring(0, 9);
    // console.log(commitSha);
    // console.log(commitUrl);
    $('#githubLast')
      .find('a').text(commitSha).attr('href', commitUrl).end()
      .find('span').text(timeSince);
  });
});