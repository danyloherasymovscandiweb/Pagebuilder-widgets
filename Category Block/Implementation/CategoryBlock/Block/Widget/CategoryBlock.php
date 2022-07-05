<?php
/**
 * Scandiweb_CategoryBlock
 *
 * @category Scandiweb
 * @package  Scandiweb_CategoryBlock
 * @author   Danylo Herasymov <d.herasymov@scandiweb.com>
 */

declare(strict_types=1);

namespace Scandiweb\CategoryBlock\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class CategoryBlock extends Template implements BlockInterface
{
    protected $_template = 'widget/category_block.phtml';
}