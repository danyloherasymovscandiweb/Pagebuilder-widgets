This widget implements a block of links to the project's social media. Can be implemented for any project that requires social media block.

To see example of a Demo Widget with adjustable fields, follow this link:
https://github.com/mertgulmus/demo-widget

Contents:
-	Title for the block (string)
-	Subtitle/slogan for the block (string)
-	Facebook URL (string)
-	Facebook text (string)
-	TikTok URL (string)
-	TikTok text (string)
-	Instagram URL (string)
-	Instagram text (string)
-	YouTube URL (string)
-	YouTube text (string)
-	Twitter URL (string)
-	Twitter text (string)

![Screenshot from 2022-06-28 11-52-45](https://user-images.githubusercontent.com/102791059/179862586-57d230c4-eec5-46a9-95c7-55e4e415a269.png)


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
7)	Go to Content -> Edit with Pagebuilder section by clicking on it. Add a new row from layout, put text element in it and press “Insert widget” icon
8)	Choose “Social Block” from the dropdown list, fill in the contents of the widget with necessary data, and save the page
