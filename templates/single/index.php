<main id="primary" class="site-main">

    <?php while ( have_posts() ) : the_post()  ?>

    <div class="container">
        <h1><?php the_title() ?></h1>
        <p><?php the_content() ?></p>
    </div>


    <?php endwhile; // End of the loop.?>

</main><!-- #main -->