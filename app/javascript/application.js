function showCombinedContextMenu(e) {
  e.preventDefault();
  
  // Get the task and container elements
  var taskElement = e.target.closest('.task-card');
  var containerElement = e.target.closest('.container-card');

  // Get the task and container IDs
  var taskId = taskElement.getAttribute('data-task-id');
  var containerId = containerElement.getAttribute('data-container-id');

  // Hide all context menus
  var contextMenus = document.querySelectorAll('.context-menu');
  contextMenus.forEach(function (menu) {
    menu.style.display = 'none';
  });

  // Get the task and container context menus
  var taskContextMenu = document.getElementById('context-menu-task-' + taskId);
  var containerContextMenu = document.getElementById('context-menu-container-' + containerId);

  // Create a new div element to hold the combined context menu
  var combinedContextMenu = document.createElement('div');
  combinedContextMenu.classList.add('context-menu');
  combinedContextMenu.style.display = 'block';
  combinedContextMenu.style.position = 'absolute';
  combinedContextMenu.style.top = e.pageY + 'px';
  combinedContextMenu.style.left = e.pageX + 'px';

  // Clone the task and container context menus and append them to the combined context menu
  combinedContextMenu.appendChild(taskContextMenu.cloneNode(true));
  combinedContextMenu.appendChild(containerContextMenu.cloneNode(true));

  // Append the combined context menu to the document body
  document.body.appendChild(combinedContextMenu);
}
