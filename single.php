<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package yourretailer
 */

get_header();
?>

<?php include __DIR__ . '/templates/single/index.php'; ?>



<?php
get_sidebar();
get_footer();