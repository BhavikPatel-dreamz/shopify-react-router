

interface SizeGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideDrawer({
  isOpen,
  onClose,
}: SizeGuideDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="size-guide-overlay"
        onClick={onClose}
      />

      <div className="size-guide-drawer">
        <div className="size-guide-header">
          <h3 className="size-guide-title">
            SIZE GUIDE
          </h3>

          <button
            className="size-guide-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="size-guide-content">
          <table className="size-guide-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Shoulder</th>
                <th>Length</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>XS</td>
                <td>36</td>
                <td>16</td>
                <td>27</td>
              </tr>

              <tr>
                <td>S</td>
                <td>38</td>
                <td>17</td>
                <td>28</td>
              </tr>

              <tr>
                <td>M</td>
                <td>40</td>
                <td>18</td>
                <td>29</td>
              </tr>

              <tr>
                <td>L</td>
                <td>42</td>
                <td>19</td>
                <td>30</td>
              </tr>

              <tr>
                <td>XL</td>
                <td>44</td>
                <td>20</td>
                <td>31</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}