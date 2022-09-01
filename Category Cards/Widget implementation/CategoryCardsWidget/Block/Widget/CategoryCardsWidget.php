<?php
/*
 * @author    Mariia Shulezhko <mariia.shulezhko@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

declare(strict_types=1);

namespace Scandiweb\CategoryCardsWidget\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;
use Magento\Store\Model\StoreManagerInterface;
use Magento\Catalog\Model\CategoryRepository;
use Magento\Framework\View\Element\Template\Context;
use Magento\Framework\App\ObjectManager;
use Magento\Framework\Exception\NoSuchEntityException;

class CategoryCardsWidget extends Template implements BlockInterface
{
    protected $_template = 'widget/category_cards_widget.phtml';
    protected $_storeManager;
    protected $categoryRepository;

    public function __construct(
        StoreManagerInterface $storeManager,
        CategoryRepository $categoryRepository,
        Context $context,
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->storeManager = $storeManager;
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @return integer
     */
    public function getStoreId() {
        return $this->storeManager->getStore()->getId();
    }

    /**
     * @return string
     */
    public function getCategoryId() {
        $category = $this->getCategory();
        return substr(strrchr($category, '/'), 1);
    }

    /**
     * @return object
     * @throws NoSuchEntityException
     */
    public function getCategoryObject() {
        $id = $this->getCategoryId();
        $category = $this->categoryRepository->get($id, $this->getStoreId());

        return $category;
    }
}

