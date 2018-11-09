import { blockName } from './constants';

import ImagePlaceholderBlock from './imagePlaceholder';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( blockName, {
	title: __( 'Image Placeholder' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'Image' ),
		__( 'Placeholder' ),
	],

	attributes: {
		width: {
			source: 'attribute',
			attribute: 'width',
			selector: '.width',
		},
		height: {
			source: 'attribute',
			attribute: 'height',
			selector: '.height',
		},
		src: {
			source: 'attribute',
			attribute: 'src',
			selector: '.src',
		},
		alt: {
			source: 'attribute',
			attribute: 'alt',
			selector: '.alt',
		},
	},

	edit: ( { className, attributes, setAttributes } ) => {
		return (
			<ImagePlaceholderBlock
				setAttributes={setAttributes}
				attributes={attributes}
			/>
		);
	},

	save: ( { attributes } ) => {
		return (
			<img src={attributes.src} alt={attributes.alt} width={attributes.width} height={attributes.height}  />
		);
	},
} );
