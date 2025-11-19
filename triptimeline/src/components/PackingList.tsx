'use client';

import { useState } from 'react';
import { PackingItem } from '@/types/itinerary';

interface PackingListProps {
  packingList: PackingItem[];
  onUpdatePackingList: (packingList: PackingItem[]) => void;
}

export default function PackingList({ packingList, onUpdatePackingList }: PackingListProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    category: 'other' as PackingItem['category'],
    quantity: 1,
    essential: false,
    notes: ''
  });
  const [filter, setFilter] = useState<'all' | 'packed' | 'unpacked' | 'essential'>('all');

  const categories = [
    { id: 'clothing', name: 'Clothing', icon: '👕', color: 'text-primary', bgColor: '#fefae0' },
    { id: 'electronics', name: 'Electronics', icon: '📱', color: 'text-secondary', bgColor: '#fefae0' },
    { id: 'toiletries', name: 'Toiletries', icon: '🧴', color: 'text-accent', bgColor: '#fefae0' },
    { id: 'documents', name: 'Documents', icon: '📄', color: 'text-primary', bgColor: '#b1ab86' },
    { id: 'medications', name: 'Medications', icon: '💊', color: 'text-secondary', bgColor: '#b1ab86' },
    { id: 'accessories', name: 'Accessories', icon: '👜', color: 'text-accent', bgColor: '#819067' },
    { id: 'other', name: 'Other', icon: '📦', color: 'text-primary', bgColor: '#819067' },
  ];

  const getCategoryInfo = (categoryId: string) => 
    categories.find(cat => cat.id === categoryId) || categories[categories.length - 1];

  const togglePacked = (itemId: string) => {
    const updatedList = packingList.map(item =>
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    onUpdatePackingList(updatedList);
  };

  const addItem = () => {
    if (!newItem.name.trim()) return;
    
    const item: PackingItem = {
      id: Date.now().toString(),
      ...newItem,
      name: newItem.name.trim(),
      packed: false
    };
    
    onUpdatePackingList([...packingList, item]);
    setNewItem({ name: '', category: 'other', quantity: 1, essential: false, notes: '' });
    setShowAddForm(false);
  };

  const removeItem = (itemId: string) => {
    onUpdatePackingList(packingList.filter(item => item.id !== itemId));
  };

  const filteredItems = packingList.filter(item => {
    switch (filter) {
      case 'packed': return item.packed;
      case 'unpacked': return !item.packed;
      case 'essential': return item.essential;
      default: return true;
    }
  });

  const groupedItems = categories.reduce((acc, category) => {
    acc[category.id] = filteredItems.filter(item => item.category === category.id);
    return acc;
  }, {} as Record<string, PackingItem[]>);

  const packedCount = packingList.filter(item => item.packed).length;
  const totalCount = packingList.length;
  const essentialCount = packingList.filter(item => item.essential && !item.packed).length;

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Packing List</h2>
            <p className="text-gray-600">Keep track of everything you need</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="btn-primary px-6 py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border-2 border-primary hover:border-secondary"
            style={{
              background: 'linear-gradient(to right, #0A400C, #819067)',
              color: '#FEFAE0'
            }}
          >
            + Add Item
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Progress: {packedCount}/{totalCount} items packed
            </span>
            <span className="text-sm font-medium text-primary">
              {totalCount > 0 ? Math.round((packedCount / totalCount) * 100) : 0}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-primary h-3 rounded-full transition-all duration-300"
              style={{ width: `${totalCount > 0 ? (packedCount / totalCount) * 100 : 0}%` }}
            ></div>
          </div>
          {essentialCount > 0 && (
            <p className="text-sm mt-2" style={{color: '#0a400c'}}>
              ⚠️ {essentialCount} essential item{essentialCount > 1 ? 's' : ''} still need{essentialCount === 1 ? 's' : ''} to be packed
            </p>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', name: 'All Items', count: packingList.length },
            { id: 'unpacked', name: 'To Pack', count: packingList.length - packedCount },
            { id: 'packed', name: 'Packed', count: packedCount },
            { id: 'essential', name: 'Essential', count: packingList.filter(item => item.essential).length },
          ].map(filterOption => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id as any)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === filterOption.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filterOption.name} ({filterOption.count})
            </button>
          ))}
        </div>
      </div>

      {/* Add Item Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full p-6 border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Add Packing Item</h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Item name"
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />

              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value as PackingItem['category'] })}
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>

              <input
                type="number"
                value={newItem.quantity}
                onChange={(e) => setNewItem({ ...newItem, quantity: Math.max(1, parseInt(e.target.value) || 1) })}
                placeholder="Quantity"
                min="1"
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />

              <textarea
                value={newItem.notes}
                onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
                placeholder="Notes (optional)"
                rows={2}
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={newItem.essential}
                  onChange={(e) => setNewItem({ ...newItem, essential: e.target.checked })}
                  className="w-5 h-5 text-primary border-secondary border-opacity-30 rounded focus:ring-primary"
                />
                <span className="text-sm font-medium text-gray-700">Mark as essential</span>
              </label>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-4 py-3 border border-secondary border-opacity-30 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={addItem}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-200"
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Packing Items by Category */}
      <div className="space-y-6">
        {categories.map(category => {
          const items = groupedItems[category.id];
          if (items.length === 0) return null;

          return (
            <div key={category.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <span 
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: category.bgColor,
                      color: category.color === 'text-primary' ? '#0a400c' : 
                             category.color === 'text-secondary' ? '#819067' : '#b1ab86'
                    }}
                  >
                    {items.filter(item => item.packed).length}/{items.length}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {items.map(item => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 ${
                      item.packed
                        ? 'opacity-75'
                        : item.essential
                        ? 'border-primary'
                        : ''
                    }`}
                    style={{
                      backgroundColor: item.packed ? '#b1ab86' : item.essential ? '#fefae0' : '#fefae0',
                      borderColor: item.packed ? '#819067' : item.essential ? '#0a400c' : '#819067'
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => togglePacked(item.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          item.packed
                            ? 'text-white'
                            : 'hover:border-secondary'
                        }`}
                        style={{
                          backgroundColor: item.packed ? '#819067' : 'transparent',
                          borderColor: item.packed ? '#819067' : '#B1AB86'
                        }}
                      >
                        {item.packed && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className={`font-medium ${item.packed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                            {item.name}
                          </span>
                          {item.essential && (
                            <span className="px-2 py-1 text-xs font-medium rounded-full" style={{backgroundColor: '#b1ab86', color: '#0a400c'}}>
                              Essential
                            </span>
                          )}
                          {item.quantity > 1 && (
                            <span className="px-2 py-1 text-xs font-medium rounded-full" style={{backgroundColor: '#FEFAE0', color: '#819067'}}>
                              x{item.quantity}
                            </span>
                          )}
                        </div>
                        {item.notes && (
                          <p className="text-sm text-gray-500 mt-1">{item.notes}</p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-lg transition-colors"
                      style={{color: '#b1ab86'}}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = '#0a400c';
                        (e.target as HTMLElement).style.backgroundColor = '#fefae0';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = '#b1ab86';
                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🧳</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
          <p className="text-gray-600 mb-6">
            {filter === 'all' ? 'Start by adding items to your packing list' : `No ${filter} items to show`}
          </p>
          {filter === 'all' && (
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-200"
            >
              Add Your First Item
            </button>
          )}
        </div>
      )}
    </div>
  );
}
