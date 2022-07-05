<?php
/**
 * Scandiweb_NewsletterBlock
 *
 * @category Scandiweb
 * @package  Scandiweb_NewsletterBlock
 * @author   Danylo Herasymov <d.herasymov@scandiweb.com>
 */

declare(strict_types=1);

namespace Scandiweb\NewsletterBlock\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class NewsletterBlock extends Template implements BlockInterface
{
    protected $_template = 'widget/newsletter_block.phtml';
}