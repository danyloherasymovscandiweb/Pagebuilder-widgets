<?php
/**
 * Scandiweb_BrandsBlock
 *
 * @category Scandiweb
 * @package  Scandiweb_BrandsBlock
 * @author   Danylo Herasymov <danylo.herasymov@scandiweb.com>
 */

declare(strict_types=1);

namespace Scandiweb\BrandsBlock\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class BrandsBlock extends Template implements BlockInterface
{
    protected $_template = 'widget/brands_block.phtml';
}