# Config required for Compass setup
# this configuration file is used during development time and in the future during build time.
# Placed here to keep external from deployed code

require "rgbapng"
preferred_syntax = :scss
project_path = "../doneraile/www"
css_dir = "css"
sass_dir = "scss"
output_style = (environment == :production) ? :compressed : :expanded
images_dir = "img"
