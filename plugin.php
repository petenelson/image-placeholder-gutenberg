<?php
/**
 * Plugin Name: Image Placeholder Gutenberg Block
 * Description: A Gutenberg block for adding placeholder images.
 * Author: Pete Nelson
 * Author URI: https://petenelson.io
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package ImagePlaceholderGutenberg
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
