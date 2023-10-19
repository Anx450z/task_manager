function showCombinedContextMenu(e) {
  e.preventDefault();
  e.stopPropagation();
  // Get the task and container elements
  var taskElement = e.target.closest('.task-card');
  var containerElement = e.target.closest('.container-card');

  // If neither taskElement nor containerElement is found, ignore the click event
  if (!taskElement && !containerElement) {
    return;
  }

  // Get the task and container IDs
  var taskId = taskElement ? taskElement.getAttribute('data-task-id') : null;
  var containerId = containerElement ? containerElement.getAttribute('data-container-id') : null;

  // Hide all context menus
  var contextMenus = document.querySelectorAll('.context-menu');
  contextMenus.forEach(function (menu) {
    menu.style.display = 'none';
  });

  // Get the task and container context menus
  var taskContextMenu = taskId ? document.getElementById('context-menu-task-' + taskId) : null;
  var containerContextMenu = containerId ? document.getElementById('context-menu-container-' + containerId) : null;

  // If neither taskContextMenu nor containerContextMenu is found, ignore the click event
  if (!taskContextMenu && !containerContextMenu) {
    return;
  }

  // Create a new div element to hold the combined context menu
  var combinedContextMenu = document.createElement('div');
  combinedContextMenu.classList.add('context-menu');
  combinedContextMenu.style.display = 'block';
  combinedContextMenu.style.position = 'absolute';
  combinedContextMenu.style.top = e.pageY + 'px';
  combinedContextMenu.style.left = e.pageX + 'px';

  // Clone the task and container context menus and append them to the combined context menu
  if (taskContextMenu) {
    var clonedTaskMenu = taskContextMenu.cloneNode(true);
    clonedTaskMenu.classList.remove('hidden');
    combinedContextMenu.appendChild(clonedTaskMenu);
}

if (containerContextMenu) {
    var clonedContainerMenu = containerContextMenu.cloneNode(true);
    clonedContainerMenu.classList.remove('hidden');
    combinedContextMenu.appendChild(clonedContainerMenu);
}

  // Append the combined context menu to the document body
  document.body.appendChild(combinedContextMenu);
}

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function (e) {
    var contextMenus = document.querySelectorAll('.context-menu');
    contextMenus.forEach(function(menu) {
      menu.style.display = 'none';
    });
  });
});
