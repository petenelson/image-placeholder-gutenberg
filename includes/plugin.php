<?php
/**
 * Plugin Initializer
 *
 * @package PeteNelson\ImagePlaceholderGutenberg
 */

namespace PeteNelson\ImagePlaceholderGutenberg;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * WordPress hooks and filters.
 *
 * @return void
 */
function setup() {

	add_action( 'init', __NAMESPACE__ . '\register_styles_scripts' );
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor_assets' );
}

/**
 * Returns the assets version for enqueueing.
 *
 * @return string
 */
function get_assets_version() {
	return apply_filters( __FUNCTION__, IMAGE_PLACEHOLDER_GUTENBERG_VERSION );
}

/**
 * Register styles and scripts.
 *
 * @return void
 */
function register_styles_scripts() {

	$min = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	wp_register_script(
		'image-placeholder-gutenberg',
		IMAGE_PLACEHOLDER_GUTENBERG_URL . "/assets/image-placeholder-gutenberg{$min}.js",
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		get_assets_version(),
		true
	);

	wp_register_style(
		'image-placeholder-gutenberg',
		IMAGE_PLACEHOLDER_GUTENBERG_URL . "/assets/image-placeholder-gutenberg{$min}.css",
		array( 'wp-edit-blocks' ),
		get_assets_version()
	);
}

/**
 * Enqueues Gutenberg editor assets.
 *
 * @return void
 */
function enqueue_editor_assets() {
	wp_enqueue_style( 'image-placeholder-gutenberg' );
	wp_enqueue_script( 'image-placeholder-gutenberg' );
}
