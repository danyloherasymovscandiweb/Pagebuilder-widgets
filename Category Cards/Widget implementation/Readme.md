This widget implements a block of categories . It can represent a categorie, that are sorted according to category position rule.

Contents:
-	Category chooser 

![Screenshot from 2022-09-01 11-50-18](https://user-images.githubusercontent.com/102791059/187873452-79aec8c5-3778-4b99-8d40-a3c66a8f1283.png)


All of the contents are set up in the Magento admin panel and can be changed easily.

Block implements both desktop and mobile styles. Colors and fonts can be easily adjusted via .scss file in the `CategoryBlockWIdget` component.
![Screenshot from 2022-09-01 11-50-23](https://user-images.githubusercontent.com/102791059/187873534-bbcbe8f0-9d78-4f9f-adb1-5fc75f16d4b7.png)


Installation

To install this widget in your project, you should follow the next steps:
1)	Create `Scandiweb` folder at `*your-project-name*/*cma-folder*/app/code`
2)	Copy `CategoryCardsWidget` folder from this repo to `Scandiweb`
3)	Go to CMA folder, enter Magento CLI (`npm run cli`) and run `magento setup:upgrade` command. In `*your-project-name*/*cma-folder*/app/etc/config.php` you should see `'Scandiweb_CategoryCardsWidget => 1`
4)	Go to `*your-project-name*/*cma-folder*/*theme-folder*/src/component` and copy-paste `CategoryCardsWidget` folder from this repo.
5)	Rebuild your theme by running `npm run build` in your theme folder
6)	Launch your Magento app, go to admin panel Content -> Pages and edit the page you want to add the widget to.
7)	Go to Content -> Edit with Pagebuilder section by clicking on it. Add a new row from layout, put text element in it and press “Insert widget” icon
8)	Choose “Category Widget” from the dropdown list, fill in the contents of the widget with necessary data, and save the page

