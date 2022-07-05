<?php
/**
 * Scandiweb_SocialBlock
 *
 * @category Scandiweb
 * @package  Scandiweb_SocialBlock
 * @author   Danylo Herasymov <danylo.herasymov@scandiweb.com>
 */


declare(strict_types=1);

namespace Scandiweb\SocialBlock\Block\Adminhtml\Widget;

use Magento\Framework\Data\Form\Element\AbstractElement;
use Magento\Framework\Data\Form\Element\Factory as ElementFactory;
use Magento\Backend\Block\Template;
use Magento\Backend\Block\Widget\Button;
use Magento\Backend\Block\Template\Context;
use Magento\Framework\Data\Form\Element\Text;
use Magento\Framework\Exception\LocalizedException;

class ImageChooser extends Template
{
    /**
     * @var ElementFactory
     */
    protected $elementFactory;

    /**
     * @param Context $context
     * @param ElementFactory $elementFactory
     * @param array $data
     */
    public function __construct(
        Context $context,
        ElementFactory $elementFactory,
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->elementFactory = $elementFactory;
    }

    /**
     * Prepare chooser element HTML
     *
     * @param AbstractElement $element
     *
     * @return AbstractElement
     * @throws LocalizedException
     */
    public function prepareElementHtml(AbstractElement $element)
    {
        $config = $this->_getData('config');
        $sourceUrl = $this->getUrl(
            'cms/wysiwyg_images/index',
            ['target_element_id' => $element->getId(), 'type' => 'file']
        );

        /** @var Button $chooser */
        $chooser = $this->getLayout()->createBlock(Button::class)
            ->setType('button')
            ->setClass('btn-chooser')
            ->setLabel($config['button']['open'])
            ->setOnClick('MediabrowserUtility.openDialog(\'' . $sourceUrl . '\', 0, 0, "MediaBrowser", {})')
            ->setDisabled($element->getReadonly());

        /** @var Text $input */
        $input = $this->elementFactory->create('text', ['data' => $element->getData()]);
        $input->setId($element->getId());
        $input->setForm($element->getForm());
        $input->setClass('widget-option input-text admin__control-text');
        if ($element->getRequired()) {
            $input->addClass('required-entry');
        }

        $element->setData('after_element_html', $input->getElementHtml() . $chooser->toHtml()
            . "<script>require(['mage/adminhtml/browser']);</script>");

        return $element;
    }
}