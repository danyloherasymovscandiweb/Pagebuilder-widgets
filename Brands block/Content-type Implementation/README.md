This content-type implements a featured brands block. It may be helpful for a project, where certain brands/products are more important to show than others, and this block may be used to highlight those, meanwhile providing options to see all.

To see example of Demo Content-Type which implements adjustable fields, follow this link:
https://github.com/danyloherasymovscandiweb/demo-content-type

Contents:
-	Title for the block (string)
-	First brand image (image)
-	First brand URL (string)
-	Second brand image (image)
-	Second brand URL (string)
-	Third brand image (image)
-	Third brand URL (string)
-	Text for button (string)
-	URL for button (string)

Admin panel preview:
![Screenshot from 2022-08-11 12-33-13](https://user-images.githubusercontent.com/102791059/184105183-c436e240-7161-4327-a085-1cc30a66ea0f.png)

Block adjustment
![Screenshot from 2022-08-11 12-33-27](https://user-images.githubusercontent.com/102791059/184105209-4a2e15e7-b4af-4237-8f29-135c648aae83.png)
![Screenshot from 2022-08-11 12-33-42](https://user-images.githubusercontent.com/102791059/184105222-67a8ac00-5f44-4308-bbe8-634512c32233.png)



All of the contents are set up in the Magento admin panel and can be changed easily.

Block implements both desktop and mobile styles. Colors and fonts can be easily adjusted via .scss file in the `BrandsBlockWIdget` component.

Desktop:
![Screenshot from 2022-06-16 12-27-20](https://user-images.githubusercontent.com/102791059/179861895-d1943cc3-143f-474e-ae05-08411fd1ae2a.png)

Mobile: 
![Screenshot from 2022-06-16 12-27-30](https://user-images.githubusercontent.com/102791059/179861908-16aaebe9-2276-4ab6-afcf-d0f264d9a3d0.png)


Images are chosen via admin panel. For correct representation, it is advised to choose square-like images (height = width). 

Installation

To install this widget in your project, you should follow the next steps:
1)	Create `Scandiweb` folder at `*your-project-name*/*cma-folder*/app/code`
2)	Copy `PageBuilderBrandsBlock` folder from this repo to `Scandiweb`
3)	Go to CMA folder, enter Magento CLI (`npm run cli`) and run `magento setup:upgrade` command. In `*your-project-name*/*cma-folder*/app/etc/config.php` you should see `'Scandiweb_BrandsBlock' => 1`
4)	Go to `*your-project-name*/*cma-folder*/*theme-folder*/src/component` and copy-paste `BrandsBlockWidget` folder from this repo.
5)	Rebuild your theme by running `npm run build` in your theme folder
6)	Launch your Magento app, go to admin panel Content -> Pages and edit the page you want to add the widget to.
7)	Go to Content -> Edit with Pagebuilder section by clicking on it. Add a new row or column from layout, and select the BrandsBlock from Scandipwa part of the panel on the left
8)	Fill in the contents of the block with necessary data, and save the page

