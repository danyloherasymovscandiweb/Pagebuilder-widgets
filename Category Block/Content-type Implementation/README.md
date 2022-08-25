This content-type implements a block of categories of products. It can represent a few categories, and a banner of the section with its own button can lead to a special category (e.g. promo-campaign). “Shop now” button is intended to direct to all categories list

To see example of Demo Content-Type which implements adjustable fields, follow this link:
https://github.com/danyloherasymovscandiweb/demo-content-type

Contents:
-	Title for the block (string)
-	Subtitle/slogan for the block (string)
-	Block banner image (image)
-	Banner button URL (string)
-	Banner button text (string)
-	First category image (image)
-	First category URL (string)
-	First category caption (string)
-	Second category image (image)
-	Second category URL (string)
-	Second category caption (string)
-	Third category image (image)
-	Third category URL (string)
-	Third category caption (string)
-	Fourth category image (image)
-	Fourth category URL (string)
-	Fourth category caption (string)
-	Text for button (string)
-	URL for button (string)

Admin panel preview:
![Screenshot from 2022-08-11 12-40-22](https://user-images.githubusercontent.com/102791059/184106452-8db263f0-d237-4641-a051-c4455085cbf8.png)

Category block adjustment:
![Screenshot from 2022-08-11 12-40-38](https://user-images.githubusercontent.com/102791059/184106530-8191def9-e536-41e6-ac26-38e37575c29f.png)
![Screenshot from 2022-08-11 12-40-53](https://user-images.githubusercontent.com/102791059/184106541-991b5e8c-c881-4964-93bf-d817299e57eb.png)
![Screenshot from 2022-08-11 12-41-04](https://user-images.githubusercontent.com/102791059/184106559-cc01f6f7-1ce8-40fc-9ac7-bd4eec2633d8.png)
![Screenshot from 2022-08-11 12-41-12](https://user-images.githubusercontent.com/102791059/184106567-c3c9c73e-9c19-4dff-8430-a95fd1598964.png)


All of the contents are set up in the Magento admin panel and can be changed easily.

Block implements both desktop and mobile styles. Colors and fonts can be easily adjusted via .scss file in the `CategoryBlockWIdget` component.

Desktop:
![Screenshot from 2022-06-16 13-59-58](https://user-images.githubusercontent.com/102791059/179862119-8d8b19bf-fce7-4f3c-ab43-9656f72d5c6e.png)

Mobile:
![Screenshot from 2022-06-16 13-59-44](https://user-images.githubusercontent.com/102791059/179862132-633fb46b-3b54-4e16-8559-d3c0d7a10ba6.png)


Images are chosen via the admin panel. For correct representation, advised dimensions of pictures are mentioned in the admin panel. 

Installation

To install this widget in your project, you should follow the next steps:
1)	Create `Scandiweb` folder at `*your-project-name*/*cma-folder*/app/code`
2)	Copy `PageBuilderCategoryBlock` folder from this repo to `Scandiweb`
3)	Go to CMA folder, enter Magento CLI (`npm run cli`) and run `magento setup:upgrade` command. In `*your-project-name*/*cma-folder*/app/etc/config.php` you should see `'Scandiweb_CategoryBlock => 1`
4)	Go to `*your-project-name*/*cma-folder*/*theme-folder*/src/component` and copy-paste `CategoryBlockWidget` folder from this repo.
5)	Rebuild your theme by running `npm run build` in your theme folder
6)	Launch your Magento app, go to admin panel Content -> Pages and edit the page you want to add the widget to.
7)	Go to Content -> Edit with Pagebuilder section by clicking on it. Add a new row or column from layout, and select the CategoryBlock from Scandipwa part of the panel on the left
8)  Fill in the contents of the block with necessary data, and save the page

