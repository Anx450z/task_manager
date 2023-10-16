function toggleStatusCard(status) {
  var card = document.getElementById('status-card-' + status);
  var expanded = card.getAttribute('data-expanded') === 'true';
  card.setAttribute('data-expanded', !expanded);
}

function showContextMenu(e, taskId) {
  e.preventDefault();
  
  // Hide all context menus
  var contextMenus = document.querySelectorAll('.context-menu');
  contextMenus.forEach(function(menu) {
    menu.style.display = 'none';
  });

  // Show the context menu for the clicked task
  var contextMenu = document.getElementById('context-menu-' + taskId);
  contextMenu.style.display = 'block';
  contextMenu.style.top = e.pageY + 'px';
  contextMenu.style.left = e.pageX + 'px';
}

function updateTaskStatus(taskId, newStatus) {
  fetch(`/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
    },
    body: JSON.stringify({ task: { status: newStatus } })
  })
  .then(response => response.json())
  .then(data => {
    // Update the task card with the new status
    const taskCard = document.querySelector(`.task-card[data-task-id="${taskId}"]`);
    taskCard.querySelector('.task-status').textContent = data.status;
  })
  .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function (e) {
    var contextMenus = document.querySelectorAll('.context-menu');
    contextMenus.forEach(function(menu) {
      menu.style.display = 'none';
    });
  });

  // Add click event listener to each status option
  var statusOptions = document.querySelectorAll('.status-option');
  statusOptions.forEach(function(statusOption) {
    statusOption.addEventListener('click', function(e) {
      var taskId = statusOption.closest('.context-menu').id.split('-').pop();
      var newStatus = statusOption.innerText;
      updateTaskStatus(taskId, newStatus);
    });
  });
});
