function toggleStatusCard(status) {
  var card = document.getElementById('status-card-' + status);
  var expanded = card.getAttribute('data-expanded') === 'true';
  card.setAttribute('data-expanded', !expanded);
}
