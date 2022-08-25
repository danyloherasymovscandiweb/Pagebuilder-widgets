This content-type implements a block of links to the project's social media. Can be implemented for any project that requires social media block.

To see example of Demo Content-Type which implements adjustable fields, follow this link:
https://github.com/danyloherasymovscandiweb/demo-content-type

Contents:
-	Title for the block (string)
-	Subtitle/slogan for the block (string)
-	First URL (string)
-	First text (string)
-	Second URL (string)
-	Second text (string)
-	Third URL (string)
-	Third text (string)
-	Fourth URL (string)
-	Fourth text (string)
-	Fifth URL (string)
-	Fifth text (string)

Admin panel preview:
![Screenshot from 2022-08-11 12-54-39](https://user-images.githubusercontent.com/102791059/184108895-00c89ba4-5734-4001-9d1f-901dff0c1735.png)

Block adjustment:
![Screenshot from 2022-08-11 12-54-50](https://user-images.githubusercontent.com/102791059/184108933-c6854dc8-199a-4e86-a22a-46fbadaea669.png)
![Screenshot from 2022-08-11 12-55-03](https://user-images.githubusercontent.com/102791059/184108944-38bfe409-9988-4f8a-8cb1-8381db06ce6f.png)
![Screenshot from 2022-08-11 12-55-14](https://user-images.githubusercontent.com/102791059/184108954-f51891f1-ab4e-4de8-9d93-aa1eba0db8c3.png)


All of the contents are set up in the Magento admin panel and can be changed easily.

Block implements both desktop and mobile styles. Colors and fonts can be easily adjusted via .scss file in the `SocialBlockWIdget` component.

Desktop:
![Screenshot from 2022-06-16 14-31-54](https://user-images.githubusercontent.com/102791059/179862509-c96d1db0-b772-4875-bf8b-ea240e3c8caf.png)


Mobile:
![Screenshot from 2022-06-16 14-32-04](https://user-images.githubusercontent.com/102791059/179862547-4bb0641e-5f3a-4be3-867f-eb724a8328a7.png)


NOTE!
The amount of media links and their icons are hardcoded. In case there’s another social media outlet you need to use for the project, or reduce the number given in this block, you’ll have to manually figure it in the given files. 

Installation

To install this widget in your project, you should follow the next steps:
1)	Create `Scandiweb` folder at `*your-project-name*/*cma-folder*/app/code`
2)	Copy `SocialBlock` folder from this repo to `Scandiweb`
3)	Go to CMA folder, enter Magento CLI (`npm run cli`) and run `magento setup:upgrade` command. In `*your-project-name*/*cma-folder*/app/etc/config.php` you should see `'Scandiweb_SocialBlock' => 1`
4)	Go to `*your-project-name*/*cma-folder*/*theme-folder*/src/component` and copy-paste `SocialBlockWidget` folder from this repo.
5)	Rebuild your theme by running `npm run build` in your theme folder
6)	Launch your Magento app, go to admin panel Content -> Pages and edit the page you want to add the widget to.
7)	Go to Content -> Edit with Pagebuilder section by clicking on it. Add a new row or column from layout, and select the SocialBlock from Scandipwa part of the panel on the left
8)  Fill in the contents of the block with necessary data, and save the page
