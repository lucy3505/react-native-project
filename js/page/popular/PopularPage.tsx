import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Button,
} from 'react-native';
// import {FlatList, RefreshControl} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {onLoadMorePopular, onRefreshPopular} from './PopularSlice';
import {PopularItem} from './PopularItem';
import {Searchbar} from 'react-native-paper';
const THEME_COLOR = 'red';
let canLoadMore = false;
const pageSize = 10;
export default function Index() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  let {poplarData, loading, hideLoadingMore, pageIndex, projectModes, items} =
    useSelector(state => state.PopularSlice);

  const genIndicator = () => {
    return hideLoadingMore ? null : (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator style={styles.indicator} />
        <Text>正在加载更多</Text>
      </View>
    );
  };
  const fetchPoplarData = (loadMore: any) => {
    if (loadMore) {
      dispatch(
        onLoadMorePopular({
          pageIndex: ++pageIndex,
          pageSize,
          dataArray: items,
          cb: () => {
            console.log('hhhhh');
          },
          // this.refs.toast.show('没有更多了')
        }),
      );
    } else {
      dispatch(onRefreshPopular(pageSize));
    }
  };

  useEffect(() => {
    fetchPoplarData(false);
  }, []);

  const renderItem = (data: any) => {
    const item = data.item;

    return <PopularItem item={item} onSelect={() => {}} />;
  };
  return (
    <View style={styles.container}>
      {/* <Button onPress={handleClick}>获取数据</Button> */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.search_container}>
        <Searchbar
          inputStyle={styles.input}
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          clearIcon="close"
        />
        <Text style={styles.filter}>Filter</Text>
      </View>

      <View>
        <FlatList
          data={projectModes}
          renderItem={data => renderItem(data)}
          keyExtractor={item => '' + item.id}
          refreshControl={
            <RefreshControl
              title={'Loading'}
              titleColor={THEME_COLOR}
              colors={[THEME_COLOR]}
              refreshing={loading}
              onRefresh={() => fetchPoplarData(false)}
              tintColor={THEME_COLOR}
            />
          }
          ListFooterComponent={() => genIndicator()}
          onEndReached={() => {
            console.log('---onEndReached---');
            setTimeout(() => {
              if (canLoadMore) {
                fetchPoplarData(true);
                canLoadMore = false;
              }
            }, 100);
          }}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={() => {
            canLoadMore = true;
            console.log('---onMomentumScrollBegin----');
          }}
        />
        {/* <Toast ref={'toast'} position={'center'} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  indicator: {
    color: 'red',
    margin: 10,
  },
  search_container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    width: 300,
    backgroundColor: '#fff',
  },
  filter: {},
  input: {
    height: 40,
    padding: 0,
    margin: 0,
  },
});
