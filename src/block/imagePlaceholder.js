import providers from './providers/providers';

import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { Fragment, Component } = wp.element;

const {
	PanelBody,
	TextControl,
	Placeholder,
	Button,
} = wp.components;

class ImagePlaceholderBlock extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			addImageClicked: false,
			width: props.width || 600,
			height: props.height || 350,
			provider: 'BaconMockupProvider',
		};
	}

	imgSrc = (attributes) => {

		let width = attributes.width || 600;
		let height = attributes.height || 350;

		return `https://baconmockup.com/${parseInt(width)}/${parseInt(height)}`;
	};

	render() {

		const {
		} = this.state;

		const inspectorControls = (

			<InspectorControls>

				<PanelBody title={ __( 'Placeholder Image Details' ) }>

				</PanelBody>

			</InspectorControls>
		);

		const showInitalPlaceholder = true;
		const showImage = false;
		const alt = 'Bacon Mockup';
		const classNames = [];

		return (

			<Fragment>

				{ inspectorControls }

				{ showInitalPlaceholder ? (
					<Placeholder
						icon="forms"
						label={ __( 'Select Placeholder Image Details' ) }
					>

						<Button onClick={ this.addImageClicked } className="is-button is-default is-large">
							{ __( 'Add Image' ) }
						</Button>

					</Placeholder>
				) : false }

				{ showImage ? (
					<img src={imgSrc(attributes)} alt={ alt } className={ classNames.join( ' ' ) } />
				) : false }

			</Fragment>
		);
	}
}

export default ImagePlaceholderBlock;
