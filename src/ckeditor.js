/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Font from '@ckeditor/ckeditor5-font/src/font';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Font
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'fontColor',
			'fontBackgroundColor'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	fontBackgroundColor: {
		colors: [
			'hsl(0,0%,0%)',
			'hsl(0,0%,12.5%)',
			'hsl(0,0%,25%)',
			'hsl(0,0%,37.5%)',
			'hsl(0,0%,50%)',
			'hsl(0,0%,62.50%)',
			'hsl(0,0%,75%)',
			'hsl(0,0%,87.5%)',
			{
				color: 'hsl(0,0%,100%)',
				hasBorder: true
			},
			'hsl(0,100%,10%)',
			'hsl(0,100%,20%)',
			'hsl(0,100%,30%)',
			'hsl(0,100%,40%)',
			'hsl(0,100%,50%)',
			'hsl(0,100%,60%)',
			'hsl(0,100%,70%)',
			'hsl(0,100%,80%)',
			{
				color: 'hsl(0,100%,90%)',
				hasBorder: true
			},
			'hsl(30,100%,10%)',
			'hsl(30,100%,20%)',
			'hsl(30,100%,30%)',
			'hsl(30,100%,40%)',
			'hsl(30,100%,50%)',
			'hsl(30,100%,60%)',
			'hsl(30,100%,70%)',
			'hsl(30,100%,80%)',
			{
				color: 'hsl(30,100%,90%)',
				hasBorder: true
			},
			'hsl(60,100%,10%)',
			'hsl(60,100%,20%)',
			'hsl(60,100%,30%)',
			'hsl(60,100%,40%)',
			'hsl(60,100%,50%)',
			'hsl(60,100%,60%)',
			'hsl(60,100%,70%)',
			'hsl(60,100%,80%)',
			{
				color: 'hsl(60,100%,90%)',
				hasBorder: true
			},
			'hsl(90,100%,10%)',
			'hsl(90,100%,20%)',
			'hsl(90,100%,30%)',
			'hsl(90,100%,40%)',
			'hsl(90,100%,50%)',
			'hsl(90,100%,60%)',
			'hsl(90,100%,70%)',
			'hsl(90,100%,80%)',
			{
				color: 'hsl(90,100%,90%)',
				hasBorder: true
			},
			'hsl(120,100%,10%)',
			'hsl(120,100%,20%)',
			'hsl(120,100%,30%)',
			'hsl(120,100%,40%)',
			'hsl(120,100%,50%)',
			'hsl(120,100%,60%)',
			'hsl(120,100%,70%)',
			'hsl(120,100%,80%)',
			{
				color: 'hsl(120,100%,90%)',
				hasBorder: true
			},
			'hsl(150,100%,10%)',
			'hsl(150,100%,20%)',
			'hsl(150,100%,30%)',
			'hsl(150,100%,40%)',
			'hsl(150,100%,50%)',
			'hsl(150,100%,60%)',
			'hsl(150,100%,70%)',
			'hsl(150,100%,80%)',
			{
				color: 'hsl(150,100%,90%)',
				hasBorder: true
			},
			'hsl(180,100%,10%)',
			'hsl(180,100%,20%)',
			'hsl(180,100%,30%)',
			'hsl(180,100%,40%)',
			'hsl(180,100%,50%)',
			'hsl(180,100%,60%)',
			'hsl(180,100%,70%)',
			'hsl(180,100%,80%)',
			{
				color: 'hsl(180,100%,90%)',
				hasBorder: true
			},
			'hsl(210,100%,10%)',
			'hsl(210,100%,20%)',
			'hsl(210,100%,30%)',
			'hsl(210,100%,40%)',
			'hsl(210,100%,50%)',
			'hsl(210,100%,60%)',
			'hsl(210,100%,70%)',
			'hsl(210,100%,80%)',
			{
				color: 'hsl(210,100%,90%)',
				hasBorder: true
			},
			'hsl(240,100%,10%)',
			'hsl(240,100%,20%)',
			'hsl(240,100%,30%)',
			'hsl(240,100%,40%)',
			'hsl(240,100%,50%)',
			'hsl(240,100%,60%)',
			'hsl(240,100%,70%)',
			'hsl(240,100%,80%)',
			{
				color: 'hsl(240,100%,90%)',
				hasBorder: true
			},
			'hsl(270,100%,10%)',
			'hsl(270,100%,20%)',
			'hsl(270,100%,30%)',
			'hsl(270,100%,40%)',
			'hsl(270,100%,50%)',
			'hsl(270,100%,60%)',
			'hsl(270,100%,70%)',
			'hsl(270,100%,80%)',
			{
				color: 'hsl(270,100%,90%)',
				hasBorder: true
			},
			'hsl(300,100%,10%)',
			'hsl(300,100%,20%)',
			'hsl(300,100%,30%)',
			'hsl(300,100%,40%)',
			'hsl(300,100%,50%)',
			'hsl(300,100%,60%)',
			'hsl(300,100%,70%)',
			'hsl(300,100%,80%)',
			{
				color: 'hsl(300,100%,90%)',
				hasBorder: true
			},
			'hsl(330,100%,10%)',
			'hsl(330,100%,20%)',
			'hsl(330,100%,30%)',
			'hsl(330,100%,40%)',
			'hsl(330,100%,50%)',
			'hsl(330,100%,60%)',
			'hsl(330,100%,70%)',
			'hsl(330,100%,80%)',
			{
				color: 'hsl(330,100%,90%)',
				hasBorder: true
			},
		],
		columns: 9,
		documentColors: 18
	},
	fontColor: {
		colors: [
			'hsl(0,0%,0%)',
			'hsl(0,0%,12.5%)',
			'hsl(0,0%,25%)',
			'hsl(0,0%,37.5%)',
			'hsl(0,0%,50%)',
			'hsl(0,0%,62.50%)',
			'hsl(0,0%,75%)',
			'hsl(0,0%,87.5%)',
			{
				color: 'hsl(0,0%,100%)',
				hasBorder: true
			},
			'hsl(0,100%,10%)',
			'hsl(0,100%,20%)',
			'hsl(0,100%,30%)',
			'hsl(0,100%,40%)',
			'hsl(0,100%,50%)',
			'hsl(0,100%,60%)',
			'hsl(0,100%,70%)',
			'hsl(0,100%,80%)',
			{
				color: 'hsl(0,100%,90%)',
				hasBorder: true
			},
			'hsl(30,100%,10%)',
			'hsl(30,100%,20%)',
			'hsl(30,100%,30%)',
			'hsl(30,100%,40%)',
			'hsl(30,100%,50%)',
			'hsl(30,100%,60%)',
			'hsl(30,100%,70%)',
			'hsl(30,100%,80%)',
			{
				color: 'hsl(30,100%,90%)',
				hasBorder: true
			},
			'hsl(60,100%,10%)',
			'hsl(60,100%,20%)',
			'hsl(60,100%,30%)',
			'hsl(60,100%,40%)',
			'hsl(60,100%,50%)',
			'hsl(60,100%,60%)',
			'hsl(60,100%,70%)',
			'hsl(60,100%,80%)',
			{
				color: 'hsl(60,100%,90%)',
				hasBorder: true
			},
			'hsl(90,100%,10%)',
			'hsl(90,100%,20%)',
			'hsl(90,100%,30%)',
			'hsl(90,100%,40%)',
			'hsl(90,100%,50%)',
			'hsl(90,100%,60%)',
			'hsl(90,100%,70%)',
			'hsl(90,100%,80%)',
			{
				color: 'hsl(90,100%,90%)',
				hasBorder: true
			},
			'hsl(120,100%,10%)',
			'hsl(120,100%,20%)',
			'hsl(120,100%,30%)',
			'hsl(120,100%,40%)',
			'hsl(120,100%,50%)',
			'hsl(120,100%,60%)',
			'hsl(120,100%,70%)',
			'hsl(120,100%,80%)',
			{
				color: 'hsl(120,100%,90%)',
				hasBorder: true
			},
			'hsl(150,100%,10%)',
			'hsl(150,100%,20%)',
			'hsl(150,100%,30%)',
			'hsl(150,100%,40%)',
			'hsl(150,100%,50%)',
			'hsl(150,100%,60%)',
			'hsl(150,100%,70%)',
			'hsl(150,100%,80%)',
			{
				color: 'hsl(150,100%,90%)',
				hasBorder: true
			},
			'hsl(180,100%,10%)',
			'hsl(180,100%,20%)',
			'hsl(180,100%,30%)',
			'hsl(180,100%,40%)',
			'hsl(180,100%,50%)',
			'hsl(180,100%,60%)',
			'hsl(180,100%,70%)',
			'hsl(180,100%,80%)',
			{
				color: 'hsl(180,100%,90%)',
				hasBorder: true
			},
			'hsl(210,100%,10%)',
			'hsl(210,100%,20%)',
			'hsl(210,100%,30%)',
			'hsl(210,100%,40%)',
			'hsl(210,100%,50%)',
			'hsl(210,100%,60%)',
			'hsl(210,100%,70%)',
			'hsl(210,100%,80%)',
			{
				color: 'hsl(210,100%,90%)',
				hasBorder: true
			},
			'hsl(240,100%,10%)',
			'hsl(240,100%,20%)',
			'hsl(240,100%,30%)',
			'hsl(240,100%,40%)',
			'hsl(240,100%,50%)',
			'hsl(240,100%,60%)',
			'hsl(240,100%,70%)',
			'hsl(240,100%,80%)',
			{
				color: 'hsl(240,100%,90%)',
				hasBorder: true
			},
			'hsl(270,100%,10%)',
			'hsl(270,100%,20%)',
			'hsl(270,100%,30%)',
			'hsl(270,100%,40%)',
			'hsl(270,100%,50%)',
			'hsl(270,100%,60%)',
			'hsl(270,100%,70%)',
			'hsl(270,100%,80%)',
			{
				color: 'hsl(270,100%,90%)',
				hasBorder: true
			},
			'hsl(300,100%,10%)',
			'hsl(300,100%,20%)',
			'hsl(300,100%,30%)',
			'hsl(300,100%,40%)',
			'hsl(300,100%,50%)',
			'hsl(300,100%,60%)',
			'hsl(300,100%,70%)',
			'hsl(300,100%,80%)',
			{
				color: 'hsl(300,100%,90%)',
				hasBorder: true
			},
			'hsl(330,100%,10%)',
			'hsl(330,100%,20%)',
			'hsl(330,100%,30%)',
			'hsl(330,100%,40%)',
			'hsl(330,100%,50%)',
			'hsl(330,100%,60%)',
			'hsl(330,100%,70%)',
			'hsl(330,100%,80%)',
			{
				color: 'hsl(330,100%,90%)',
				hasBorder: true
			},
		],
		columns: 9,
		documentColors: 18
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'fr'
};
