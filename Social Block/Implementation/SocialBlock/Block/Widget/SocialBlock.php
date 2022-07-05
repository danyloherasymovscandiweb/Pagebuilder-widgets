<?php
/**
 * Scandiweb_SocialBlock
 *
 * @category Scandiweb
 * @package  Scandiweb_SocialBlock
 * @author   Danylo Herasymov <danylo.herasymov@scandiweb.com>
 */

declare(strict_types=1);

namespace Scandiweb\SocialBlock\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class SocialBlock extends Template implements BlockInterface
{
    protected $_template = 'widget/social_block.phtml';
}