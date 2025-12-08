// Comprehensive Material Design Icons List (500+ icons)
const MATERIAL_ICONS = [
  // Common Actions
  'home', 'menu', 'search', 'settings', 'favorite', 'star', 'person', 'account_circle',
  'dashboard', 'shopping_cart', 'notifications', 'mail', 'email', 'inbox', 'send',
  'cloud', 'cloud_upload', 'cloud_download', 'cloud_done', 'file_download', 'file_upload',
  'check', 'close', 'done', 'clear', 'add', 'remove', 'delete', 'edit', 'create',
  'save', 'archive', 'bookmark', 'flag', 'folder', 'work', 'build', 'bug_report',
  'refresh', 'sync', 'update', 'cached', 'restore', 'undo', 'redo', 'content_copy',
  'content_cut', 'content_paste', 'link', 'open_in_new', 'open_in_browser', 'launch',

  // Time & Calendar
  'calendar_today', 'event', 'alarm', 'schedule', 'timer', 'watch', 'today',
  'date_range', 'event_available', 'event_busy', 'alarm_on', 'alarm_off', 'hourglass_empty',
  'history', 'access_time', 'query_builder', 'schedule_send', 'timelapse',

  // Communication
  'call', 'phone', 'phone_in_talk', 'smartphone', 'tablet', 'computer', 'laptop',
  'chat', 'chat_bubble', 'comment', 'message', 'textsms', 'forum', 'question_answer',
  'mail_outline', 'markunread', 'drafts', 'forward_to_inbox', 'unsubscribe',

  // Social & People
  'people', 'group', 'supervisor_account', 'person_add', 'person_remove', 'how_to_reg',
  'face', 'sentiment_satisfied', 'mood', 'mood_bad', 'sentiment_very_satisfied',
  'thumb_up', 'thumb_down', 'thumbs_up_down', 'favorite_border', 'volunteer_activism',

  // Navigation
  'arrow_back', 'arrow_forward', 'arrow_upward', 'arrow_downward', 'expand_more',
  'expand_less', 'chevron_left', 'chevron_right', 'first_page', 'last_page',
  'navigate_next', 'navigate_before', 'unfold_more', 'unfold_less', 'more_horiz',
  'more_vert', 'apps', 'menu_open', 'fullscreen', 'fullscreen_exit', 'zoom_in',
  'zoom_out', 'filter_list', 'sort', 'swap_vert', 'swap_horiz',

  // Media & Entertainment
  'play_arrow', 'pause', 'stop', 'skip_next', 'skip_previous', 'replay', 'shuffle',
  'repeat', 'repeat_one', 'fast_forward', 'fast_rewind', 'volume_up', 'volume_down',
  'volume_off', 'volume_mute', 'mic', 'mic_off', 'headset', 'speaker', 'surround_sound',
  'music_note', 'audiotrack', 'library_music', 'album', 'queue_music', 'playlist_add',
  'radio', 'equalizer', 'graphic_eq', 'video_library', 'movie', 'theaters', 'tv',

  // Image & Photography
  'camera', 'photo_camera', 'camera_alt', 'image', 'photo', 'photo_library', 'collections',
  'filter', 'palette', 'brush', 'format_paint', 'color_lens', 'gradient', 'wallpaper',
  'crop', 'rotate_left', 'rotate_right', 'flip', 'brightness_4', 'brightness_5',
  'exposure', 'wb_sunny', 'wb_cloudy', 'wb_incandescent', 'flash_on', 'flash_off',

  // Location & Travel
  'location_on', 'place', 'map', 'navigation', 'explore', 'room', 'pin_drop',
  'my_location', 'near_me', 'directions', 'directions_walk', 'directions_run',
  'directions_car', 'directions_bike', 'directions_bus', 'directions_subway',
  'flight', 'flight_takeoff', 'flight_land', 'local_taxi', 'local_shipping',
  'train', 'tram', 'subway', 'airport_shuttle', 'ev_station', 'local_gas_station',
  'hotel', 'restaurant', 'local_cafe', 'local_bar', 'local_pizza', 'fastfood',
  'beach_access', 'pool', 'hot_tub', 'casino', 'golf_course', 'terrain',

  // Shopping & Commerce
  'shopping_bag', 'shopping_basket', 'store', 'storefront', 'local_mall', 'add_shopping_cart',
  'remove_shopping_cart', 'loyalty', 'redeem', 'card_giftcard', 'sell', 'point_of_sale',
  'attach_money', 'monetization_on', 'paid', 'payment', 'credit_card', 'account_balance',
  'account_balance_wallet', 'savings', 'currency_exchange', 'price_check', 'receipt',

  // Office & Work
  'business', 'business_center', 'work', 'work_outline', 'badge', 'corporate_fare',
  'folder', 'folder_open', 'folder_shared', 'create_new_folder', 'drive_file_move',
  'article', 'description', 'assignment', 'assignment_turned_in', 'task', 'task_alt',
  'note', 'note_add', 'sticky_note_2', 'book', 'library_books', 'menu_book',
  'auto_stories', 'import_contacts', 'bookmark_border', 'bookmarks', 'label',
  'print', 'scanner', 'fax', 'attachment', 'insert_drive_file', 'insert_photo',

  // Education & Learning
  'school', 'class', 'science', 'biotech', 'psychology', 'calculate', 'functions',
  'grade', 'emoji_events', 'military_tech', 'workspace_premium', 'verified',
  'star_rate', 'star_half', 'star_outline', 'new_releases', 'report', 'flag',

  // Technology & Development
  'code', 'terminal', 'developer_mode', 'data_object', 'integration_instructions',
  'api', 'web', 'http', 'https', 'dns', 'router', 'settings_ethernet', 'cable',
  'usb', 'bluetooth', 'wifi', 'signal_wifi_4_bar', 'network_check', 'vpn_lock',
  'security', 'lock', 'lock_open', 'key', 'vpn_key', 'password', 'fingerprint',
  'devices', 'computer', 'desktop_windows', 'laptop_mac', 'tablet_mac', 'phone_iphone',
  'watch', 'keyboard', 'mouse', 'headphones', 'speaker', 'memory', 'storage',

  // Nature & Environment
  'eco', 'nature', 'nature_people', 'forest', 'park', 'grass', 'local_florist',
  'yard', 'agriculture', 'spa', 'pets', 'bug_report', 'cruelty_free', 'recycling',
  'compost', 'energy_savings_leaf', 'water_drop', 'waves', 'ac_unit', 'severe_cold',

  // Weather
  'wb_sunny', 'wb_cloudy', 'cloud', 'cloud_queue', 'thunderstorm', 'flash_on',
  'nights_stay', 'brightness_2', 'brightness_3', 'light_mode', 'dark_mode',

  // Health & Medical
  'health_and_safety', 'medical_services', 'local_hospital', 'healing', 'vaccines',
  'medication', 'emergency', 'favorite', 'monitor_heart', 'psychology', 'self_improvement',
  'fitness_center', 'sports', 'sports_basketball', 'sports_soccer', 'sports_tennis',
  'pool', 'directions_run', 'hiking', 'sledding', 'snowboarding', 'downhill_skiing',

  // Food & Drink
  'restaurant', 'local_dining', 'dinner_dining', 'brunch_dining', 'lunch_dining',
  'bakery_dining', 'local_cafe', 'coffee', 'local_bar', 'liquor', 'wine_bar',
  'local_pizza', 'fastfood', 'ramen_dining', 'rice_bowl', 'soup_kitchen',
  'cake', 'cookie', 'icecream', 'emoji_food_beverage', 'tapas', 'set_meal',

  // Home & Living
  'home', 'apartment', 'cottage', 'holiday_village', 'house', 'house_siding',
  'bed', 'bedroom_parent', 'living', 'kitchen', 'countertops', 'microwave',
  'oven', 'blender', 'coffee_maker', 'dining', 'chair', 'desk', 'table_bar',
  'light', 'light_mode', 'lightbulb', 'nightlight', 'power', 'flash_on',
  'ac_unit', 'air', 'heat', 'door_front', 'door_back', 'garage', 'window',

  // Miscellaneous
  'accessibility', 'accessible', 'android', 'apple', 'language', 'translate',
  'public', 'travel_explore', 'tour', 'celebration', 'local_fire_department',
  'fireplace', 'rocket', 'rocket_launch', 'satellite', 'diamond', 'auto_awesome',
  'stars', 'whatshot', 'verified_user', 'shield', 'admin_panel_settings',
  'policy', 'gavel', 'balance', 'account_tree', 'hub', 'category', 'extension',
  'widgets', 'grid_view', 'view_module', 'view_list', 'view_column', 'view_agenda',
  'battery_full', 'battery_std', 'brightness_high', 'brightness_low', 'brightness_medium',
  'nightlight', 'event_seat', 'local_activity', 'confirmation_number', 'live_tv',
  'podcasts', 'toys', 'child_care', 'stroller', 'baby_changing_station', 'family_restroom'
];

// State
let selectedIcon = 'home';
let iconStyle = 'filled'; // filled, outlined, rounded, sharp, two-tone
let primaryColor = '#2196F3';
let secondaryColor = '#FF9800';
let backgroundColor = '#FFFFFF';
let iconColor = '#424242';
let iconSize = 0.7; // Scale factor for icon size (0.1 to 1.0)
let darkModeIconColor = '#FFFFFF';
let darkModeBackgroundColor = '#1a1a1a';

// Initialize
function init() {
  console.log('Favicon Generator Init - Loading', MATERIAL_ICONS.length, 'icons');
  loadIcons();
  updatePreview();
  setupEventListeners();
  console.log('Init complete');
}// Load Material Icons
function loadIcons() {
  const grid = document.getElementById('iconGrid');
  if (!grid) {
    console.error('Icon grid element not found!');
    return;
  }

  grid.innerHTML = '';
  const styleClass = getIconStyleClass();

  MATERIAL_ICONS.forEach(icon => {
    const item = document.createElement('div');
    item.className = 'icon-item';
    if (icon === selectedIcon) {
      item.classList.add('selected');
    }
    item.onclick = () => selectIcon(icon);

    item.innerHTML = `
      <span class="${styleClass}">${icon}</span>
      <span class="icon-name">${icon}</span>
    `;

    grid.appendChild(item);
  });

  // Update icon count
  const iconCountEl = document.getElementById('iconCount');
  if (iconCountEl) {
    iconCountEl.textContent = `${MATERIAL_ICONS.length} icons available`;
  }

  console.log(`Loaded ${MATERIAL_ICONS.length} icons with style: ${iconStyle}`);
}// Get icon style class
function getIconStyleClass() {
  switch(iconStyle) {
    case 'outlined': return 'material-icons-outlined';
    case 'rounded': return 'material-icons-round';
    case 'sharp': return 'material-icons-sharp';
    case 'two-tone': return 'material-icons-two-tone';
    default: return 'material-icons';
  }
}// Search Icons
function searchIcons() {
  const query = document.getElementById('iconSearch').value.toLowerCase();
  const items = document.querySelectorAll('.icon-item');

  items.forEach(item => {
    const name = item.querySelector('.icon-name').textContent.toLowerCase();
    item.style.display = name.includes(query) ? 'flex' : 'none';
  });
}

// Select Icon
function selectIcon(icon) {
  selectedIcon = icon;

  // Update UI
  document.querySelectorAll('.icon-item').forEach(item => {
    item.classList.remove('selected');
  });
  event.currentTarget.classList.add('selected');

  updatePreview();
}

// Update Colors
function updateColor(type) {
  const picker = document.getElementById(`${type}Picker`);
  const input = document.getElementById(`${type}Input`);

  if (type === 'primary') primaryColor = picker.value;
  if (type === 'secondary') secondaryColor = picker.value;
  if (type === 'background') backgroundColor = picker.value;
  if (type === 'icon') iconColor = picker.value;

  input.value = picker.value;
  updatePreview();
}

function updateColorFromInput(type) {
  const input = document.getElementById(`${type}Input`);
  const picker = document.getElementById(`${type}Picker`);

  if (/^#[0-9A-F]{6}$/i.test(input.value)) {
    if (type === 'primary') primaryColor = input.value;
    if (type === 'secondary') secondaryColor = input.value;
    if (type === 'background') backgroundColor = input.value;
    if (type === 'icon') iconColor = input.value;

    picker.value = input.value;
    updatePreview();
  }
}

// Update Icon Style
function updateIconStyle() {
  iconStyle = document.getElementById('iconStyleSelect').value;
  console.log('Icon style changed to:', iconStyle);
  loadIcons();
  updatePreview();
}

// Draw Icon on Canvas
function drawFavicon(canvas, size) {
  const ctx = canvas.getContext('2d');
  canvas.width = size;
  canvas.height = size;

  // Clear with transparency
  ctx.clearRect(0, 0, size, size);

  // Background (only if not transparent)
  if (backgroundColor !== 'transparent') {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, size, size);
  }

  // Load Material Icons font and draw icon
  const fontFamily = iconStyle === 'filled' ? 'Material Icons' :
                     iconStyle === 'outlined' ? 'Material Icons Outlined' :
                     iconStyle === 'rounded' ? 'Material Icons Round' :
                     iconStyle === 'sharp' ? 'Material Icons Sharp' :
                     'Material Icons Two Tone';

  ctx.font = `${size * iconSize}px '${fontFamily}'`;
  ctx.fillStyle = iconColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(selectedIcon, size / 2, size / 2);

  // Add optional accent (small circle in corner)
  if (document.getElementById('addAccent').checked) {
    ctx.fillStyle = secondaryColor;
    ctx.beginPath();
    ctx.arc(size * 0.8, size * 0.2, size * 0.12, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Update Preview
function updatePreview() {
  // Draw all sizes
  drawFavicon(document.getElementById('preview16'), 16);
  drawFavicon(document.getElementById('preview32'), 32);
  drawFavicon(document.getElementById('preview48'), 48);
  drawFavicon(document.getElementById('preview64'), 64);
  drawFavicon(document.getElementById('preview128'), 128);
  drawFavicon(document.getElementById('preview256'), 256);
}

// Generate ICO file
async function generateICO() {
  const sizes = [16, 32, 48, 64, 128, 256];
  const button = event.target;
  const originalText = button.textContent;

  button.textContent = 'Generating...';
  button.disabled = true;

  try {
    // Create canvases for each size
    const imageDataArray = sizes.map(size => {
      const canvas = document.createElement('canvas');
      drawFavicon(canvas, size);
      return {
        size: size,
        canvas: canvas,
        data: canvas.getContext('2d').getImageData(0, 0, size, size)
      };
    });

    // Generate ICO file
    const icoBlob = createICOBlob(imageDataArray);

    // Download
    const url = URL.createObjectURL(icoBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `icon-${selectedIcon}.ico`;
    a.click();
    URL.revokeObjectURL(url);

    showStatus('✓ favicon.ico generated successfully!', 'success');
  } catch (error) {
    showStatus('✗ Error generating favicon: ' + error.message, 'error');
  } finally {
    button.textContent = originalText;
    button.disabled = false;
  }
}

// Create ICO Blob
function createICOBlob(imageDataArray) {
  // ICO file format header
  const iconCount = imageDataArray.length;

  // Calculate file size
  let fileSize = 6 + (iconCount * 16); // Header + directory entries
  const pngDataArray = [];

  imageDataArray.forEach(({ canvas }) => {
    const pngData = canvas.toDataURL('image/png');
    const pngBytes = atob(pngData.split(',')[1]);
    pngDataArray.push(pngBytes);
    fileSize += pngBytes.length;
  });

  // Create buffer
  const buffer = new ArrayBuffer(fileSize);
  const view = new DataView(buffer);
  let offset = 0;

  // Write ICO header
  view.setUint16(offset, 0, true); offset += 2; // Reserved
  view.setUint16(offset, 1, true); offset += 2; // Type (1 = ICO)
  view.setUint16(offset, iconCount, true); offset += 2; // Image count

  // Write directory entries
  let imageOffset = 6 + (iconCount * 16);
  imageDataArray.forEach(({ size }, index) => {
    const pngSize = pngDataArray[index].length;

    view.setUint8(offset, size === 256 ? 0 : size); offset += 1; // Width
    view.setUint8(offset, size === 256 ? 0 : size); offset += 1; // Height
    view.setUint8(offset, 0); offset += 1; // Color palette
    view.setUint8(offset, 0); offset += 1; // Reserved
    view.setUint16(offset, 1, true); offset += 2; // Color planes
    view.setUint16(offset, 32, true); offset += 2; // Bits per pixel
    view.setUint32(offset, pngSize, true); offset += 4; // Image size
    view.setUint32(offset, imageOffset, true); offset += 4; // Image offset

    imageOffset += pngSize;
  });

  // Write PNG data
  pngDataArray.forEach(pngBytes => {
    for (let i = 0; i < pngBytes.length; i++) {
      view.setUint8(offset++, pngBytes.charCodeAt(i));
    }
  });

  return new Blob([buffer], { type: 'image/x-icon' });
}

// Download PNG
function downloadPNG(size) {
  const canvas = document.createElement('canvas');
  drawFavicon(canvas, size);

  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `icon-${selectedIcon}-${size}x${size}.png`;
    a.click();
    URL.revokeObjectURL(url);
  }, 'image/png');

  showStatus(`✓ ${size}×${size} PNG downloaded!`, 'success');
}

// Generate SVG with theme support
async function generateSVG() {
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = 'Generating SVG...';
  button.disabled = true;

  try {
    // Fetch actual SVG from Material Design Icons
    // Try multiple CDN sources
    const urls = [
      // Pictogrammers Material Design Icons CDN (community maintained, very reliable)
      `https://cdn.jsdelivr.net/npm/@mdi/svg@latest/svg/${selectedIcon.replace(/_/g, '-')}.svg`,
      // Google Material Symbols (newer API)
      `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${selectedIcon}/default/48px.svg`,
      // Alternative CDN
      `https://unpkg.com/@mdi/svg@latest/svg/${selectedIcon.replace(/_/g, '-')}.svg`,
    ];

    let svgContent = null;
    let sourceUrl = '';

    for (const url of urls) {
      try {
        console.log('Trying to fetch icon from:', url);
        const response = await fetch(url);
        if (response.ok) {
          const text = await response.text();
          console.log('Fetched SVG snippet:', text.substring(0, 200));
          if (text.includes('<svg') && text.includes('<path')) {
            svgContent = text;
            sourceUrl = url;
            console.log('Successfully fetched from:', url);
            break;
          }
        }
      } catch (error) {
        console.log('Failed to fetch from', url, ':', error.message);
      }
    }

    if (!svgContent) {
      showStatus(`✗ Could not fetch SVG for "${selectedIcon}". This icon may not be available as vector graphics.`, 'error');
      return;
    }

    // Parse the SVG to extract viewBox and paths
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
    const svgElement = svgDoc.querySelector('svg');

    if (!svgElement) {
      showStatus('✗ Invalid SVG format received', 'error');
      return;
    }

    const viewBox = svgElement.getAttribute('viewBox') || '0 0 24 24';
    const paths = Array.from(svgElement.querySelectorAll('path, circle, rect, polygon')).map(el => el.outerHTML).join('\n    ');

    if (!paths) {
      showStatus('✗ No paths found in SVG', 'error');
      return;
    }

    console.log('ViewBox:', viewBox);
    console.log('Paths found:', paths.substring(0, 200));

    // Parse viewBox to get dimensions
    const [vbX, vbY, vbWidth, vbHeight] = viewBox.split(' ').map(Number);
    const size = 32;

    // Calculate scaling and positioning based on iconSize
    const scale = iconSize;
    const scaledSize = vbWidth * scale;
    const offsetX = (size - scaledSize) / 2;
    const offsetY = (size - scaledSize) / 2;

    // Build the new SVG
    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`;

    // Add styles
    svg += `
  <defs>
    <style>
      .icon-path { fill: ${iconColor}; }`;

    if (backgroundColor !== 'transparent') {
      svg += `
      .background { fill: ${backgroundColor}; }`;
    }

    // Add dark mode support
    if (document.getElementById('enableDarkMode').checked) {
      svg += `
      @media (prefers-color-scheme: dark) {
        .icon-path { fill: ${darkModeIconColor}; }`;

      if (darkModeBackgroundColor !== 'transparent') {
        svg += `
        .background { fill: ${darkModeBackgroundColor}; }`;
      }

      svg += `
      }`;
    }

    svg += `
    </style>
  </defs>`;

    // Add background if not transparent
    if (backgroundColor !== 'transparent') {
      svg += `
  <rect class="background" width="${size}" height="${size}"/>`;
    }

    // Add the icon paths with scaling
    svg += `
  <g transform="translate(${offsetX}, ${offsetY}) scale(${scale})">
    ${paths.replace(/fill="[^"]*"/g, '').replace(/<(path|circle|rect|polygon)/g, '<$1 class="icon-path"')}
  </g>`;

    // Add accent dot if enabled
    if (document.getElementById('addAccent').checked) {
      svg += `
  <circle cx="${size * 0.8}" cy="${size * 0.2}" r="${size * 0.12}" fill="${secondaryColor}"/>`;
    }

    svg += `
</svg>`;

    console.log('Final SVG length:', svg.length);

    // Download
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `icon-${selectedIcon}.svg`;
    a.click();
    URL.revokeObjectURL(url);

    showStatus('✓ Vector SVG favicon generated with theme support!', 'success');
  } catch (error) {
    console.error('Error generating SVG:', error);
    showStatus('✗ Error generating SVG: ' + error.message, 'error');
  } finally {
    button.textContent = originalText;
    button.disabled = false;
  }
}

// Download raw SVG (unmodified from source)
async function downloadRawSVG() {
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = 'Fetching...';
  button.disabled = true;

  try {
    // Fetch actual SVG from Material Design Icons
    const urls = [
      // Pictogrammers Material Design Icons CDN
      `https://cdn.jsdelivr.net/npm/@mdi/svg@latest/svg/${selectedIcon.replace(/_/g, '-')}.svg`,
      // Google Material Symbols
      `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${selectedIcon}/default/48px.svg`,
      // Alternative CDN
      `https://unpkg.com/@mdi/svg@latest/svg/${selectedIcon.replace(/_/g, '-')}.svg`,
    ];

    let svgContent = null;

    for (const url of urls) {
      try {
        console.log('Trying to fetch raw icon from:', url);
        const response = await fetch(url);
        if (response.ok) {
          const text = await response.text();
          if (text.includes('<svg') && (text.includes('<path') || text.includes('<circle'))) {
            svgContent = text;
            console.log('Successfully fetched raw SVG from:', url);
            break;
          }
        }
      } catch (error) {
        console.log('Failed to fetch from', url, ':', error.message);
      }
    }

    if (!svgContent) {
      showStatus(`✗ Could not fetch raw SVG for "${selectedIcon}".`, 'error');
      return;
    }

    // Download the raw SVG as-is
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `icon-${selectedIcon}-raw.svg`;
    a.click();
    URL.revokeObjectURL(url);

    showStatus('✓ Raw SVG downloaded!', 'success');
  } catch (error) {
    console.error('Error downloading raw SVG:', error);
    showStatus('✗ Error: ' + error.message, 'error');
  } finally {
    button.textContent = originalText;
    button.disabled = false;
  }
}

// Show Status Message
function showStatus(message, type) {
  const statusDiv = document.getElementById('statusMessage');
  statusDiv.textContent = message;
  statusDiv.className = `status-message ${type}`;
  statusDiv.style.display = 'block';

  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 3000);
}

// Reset to Defaults
function resetDefaults() {
  selectedIcon = 'home';
  iconStyle = 'filled';
  primaryColor = '#2196F3';
  secondaryColor = '#FF9800';
  backgroundColor = '#FFFFFF';
  iconColor = '#424242';
  iconSize = 0.7;
  darkModeIconColor = '#FFFFFF';
  darkModeBackgroundColor = '#1a1a1a';

  document.getElementById('iconStyleSelect').value = iconStyle;
  document.getElementById('primaryPicker').value = primaryColor;
  document.getElementById('primaryInput').value = primaryColor;
  document.getElementById('secondaryPicker').value = secondaryColor;
  document.getElementById('secondaryInput').value = secondaryColor;
  document.getElementById('backgroundPicker').value = backgroundColor;
  document.getElementById('backgroundInput').value = backgroundColor;
  document.getElementById('iconPicker').value = iconColor;
  document.getElementById('iconInput').value = iconColor;
  document.getElementById('darkModeIconPicker').value = darkModeIconColor;
  document.getElementById('darkModeIconInput').value = darkModeIconColor;
  document.getElementById('darkModeBgPicker').value = darkModeBackgroundColor;
  document.getElementById('darkModeBgInput').value = darkModeBackgroundColor;
  document.getElementById('addAccent').checked = false;
  document.getElementById('transparentBg').checked = false;
  document.getElementById('enableDarkMode').checked = false;
  document.getElementById('iconSizeSlider').value = iconSize * 100;
  document.getElementById('iconSizeValue').textContent = Math.round(iconSize * 100) + '%';
  toggleDarkModeControls();

  loadIcons();
  updatePreview();
}

// Update Icon Size
function updateIconSize() {
  const slider = document.getElementById('iconSizeSlider');
  iconSize = slider.value / 100;
  document.getElementById('iconSizeValue').textContent = slider.value + '%';
  updatePreview();
}

// Toggle Transparent Background
function toggleTransparent() {
  const checkbox = document.getElementById('transparentBg');
  const bgControls = document.querySelectorAll('#backgroundPicker, #backgroundInput');

  if (checkbox.checked) {
    backgroundColor = 'transparent';
    bgControls.forEach(el => el.disabled = true);
  } else {
    backgroundColor = document.getElementById('backgroundPicker').value;
    bgControls.forEach(el => el.disabled = false);
  }
  updatePreview();
}

// Update Dark Mode Colors
function updateDarkModeColor(type) {
  const picker = document.getElementById(`darkMode${type}Picker`);
  const input = document.getElementById(`darkMode${type}Input`);

  if (type === 'Icon') darkModeIconColor = picker.value;
  if (type === 'Bg') darkModeBackgroundColor = picker.value;

  input.value = picker.value;
}

function updateDarkModeColorFromInput(type) {
  const input = document.getElementById(`darkMode${type}Input`);
  const picker = document.getElementById(`darkMode${type}Picker`);

  if (/^#[0-9A-F]{6}$/i.test(input.value)) {
    if (type === 'Icon') darkModeIconColor = input.value;
    if (type === 'Bg') darkModeBackgroundColor = input.value;

    picker.value = input.value;
  }
}

// Toggle Dark Mode Controls
function toggleDarkModeControls() {
  const checkbox = document.getElementById('enableDarkMode');
  const darkModeSection = document.getElementById('darkModeControls');

  if (checkbox.checked) {
    darkModeSection.style.display = 'block';
  } else {
    darkModeSection.style.display = 'none';
  }
}

// Setup Event Listeners
function setupEventListeners() {
  document.getElementById('iconSearch').addEventListener('input', searchIcons);
  document.getElementById('iconStyleSelect').addEventListener('change', updateIconStyle);

  ['primary', 'secondary', 'background', 'icon'].forEach(type => {
    document.getElementById(`${type}Picker`).addEventListener('input', () => updateColor(type));
    document.getElementById(`${type}Input`).addEventListener('change', () => updateColorFromInput(type));
  });

  ['Icon', 'Bg'].forEach(type => {
    document.getElementById(`darkMode${type}Picker`).addEventListener('input', () => updateDarkModeColor(type));
    document.getElementById(`darkMode${type}Input`).addEventListener('change', () => updateDarkModeColorFromInput(type));
  });

  document.getElementById('addAccent').addEventListener('change', updatePreview);
  document.getElementById('transparentBg').addEventListener('change', toggleTransparent);
  document.getElementById('enableDarkMode').addEventListener('change', toggleDarkModeControls);
  document.getElementById('iconSizeSlider').addEventListener('input', updateIconSize);
}// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
