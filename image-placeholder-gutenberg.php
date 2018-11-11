<?php
/**
 * Plugin Name: Image Placeholder Gutenberg
 * Description: A Gutenberg block for adding placeholder images (Bacon Mockup, Placekitten, etc).
 * Author: Pete Nelson
 * Author URI: https://petenelson.io
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package PeteNelson\ImagePlaceholderGutenberg
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'IMAGE_PLACEHOLDER_GUTENBERG_VERSION' ) ) {
	define( 'IMAGE_PLACEHOLDER_GUTENBERG_VERSION', '1.0.0' );
}

if ( ! defined( 'IMAGE_PLACEHOLDER_GUTENBERG_URL' ) ) {
		define( 'IMAGE_PLACEHOLDER_GUTENBERG_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
}

require_once plugin_dir_path( __FILE__ ) . 'includes/plugin.php';

\PeteNelson\ImagePlaceholderGutenberg\setup();
