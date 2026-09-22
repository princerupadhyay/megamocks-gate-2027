(function () {
  var journeyStart = new Date('2026-09-14T00:00:00');
  var today = new Date();
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  var elapsedDays = Math.floor((today - journeyStart) / millisecondsPerDay);
  var journeyDay = Math.max(1, elapsedDays + 1);

  document.querySelectorAll('.day-badge').forEach(function (badge) {
    badge.textContent = 'Day ' + journeyDay + ' of prep';
  });
})();
